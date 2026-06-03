export type ModuleId =
  | "energy"
  | "web_filter"
  | "subnet"
  | "maintenance"
  | "ecological"
  | "bandwidth"
  | "biometric_pin"
  | "routing"
  | "flood"
  | "billing";

export interface ModuleConfig {
  id: ModuleId;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  category: "energia" | "redes" | "soporte" | "seguridad" | "ambiente";
  icon: string; // Lucide icon name matching our icon dictionary
  colorClass: string; // Tailwind tint/text color combination
  bgTint: string;
  borderColor: string;
}

export interface BlockedIp {
  ip: string;
  timestamp: string;
  attemptsCount: number;
}
