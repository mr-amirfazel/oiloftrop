import { FC, useEffect, useState } from "react";
import { PiBatteryFullFill } from "react-icons/pi";
import { IoBatteryCharging } from "react-icons/io5";
import { FaBatteryHalf } from "react-icons/fa";
import { FaBatteryQuarter } from "react-icons/fa6";
import { PiBatteryWarningFill } from "react-icons/pi";
import { FaBatteryThreeQuarters } from "react-icons/fa6";

interface BatteryState {
  level: number;     // 0 → 1
  charging: boolean;
}

export const BatteryIcon: FC = () => {
  const [battery, setBattery] = useState<BatteryState>({
    level: 1,
    charging: false,
  });

  useEffect(() => {
    let batteryManager: any;

    (navigator as any).getBattery?.().then((bat: any) => {
      batteryManager = bat;

      const update = () => {
        setBattery({
          level: bat.level,
          charging: bat.charging,
        });
      };

      update();

      bat.addEventListener("levelchange", update);
      bat.addEventListener("chargingchange", update);
    });

    return () => {
      if (!batteryManager) return;
      batteryManager.removeEventListener("levelchange", () => {});
      batteryManager.removeEventListener("chargingchange", () => {});
    };
  }, []);

  // pick icon conditionally
  let icon = <PiBatteryFullFill />; // default
  if (battery.charging) {
    icon = <IoBatteryCharging />; // charging
  } else if (battery.level > 0.8) {
    icon = <FaBatteryThreeQuarters />;
  } else if (battery.level > 0.4) {
    icon = <FaBatteryHalf />; // mid-level (you can swap to half icon)
  }
  else if (battery.level > 0.2) {
    icon = <FaBatteryQuarter />; // mid-level (you can swap to half icon)
  }
   else {
    icon = <PiBatteryWarningFill />; // low battery
  }

  return <span title={`${Math.round(battery.level * 100)}%`}>{icon}</span>;
};
