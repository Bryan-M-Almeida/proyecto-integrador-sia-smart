import { ModuleConfig } from "./types";

export const ALL_MODULES: ModuleConfig[] = [
  {
    id: "energy",
    name: "Gestión de Energía",
    shortName: "Energía",
    description: "Gestor de potencia en racks de telecomunicaciones urbanos.",
    longDescription:
      "Monitorea el consumo sumado de 3 racks y apaga de forma preventiva el de menor prioridad (Rack 3) si se supera el límite crítico de carga de 5000 W.",
    category: "energia",
    icon: "Zap",
    colorClass: "text-amber-500 dark:text-amber-400",
    bgTint: "bg-amber-500/10 dark:bg-amber-400/10",
    borderColor: "border-amber-500/30 dark:border-amber-400/30",
  },
  {
    id: "web_filter",
    name: "Filtro de Acceso Web",
    shortName: "Filtro Web",
    description: "Control de navegación segura en portales públicos urbanos.",
    longDescription:
      "Regula el acceso a la red wifi municipal. Los usuarios menores de edad (menores de 18 años) quedan restringidos de forma exclusiva a dominios educativos (.edu).",
    category: "redes",
    icon: "ShieldAlert",
    colorClass: "text-emerald-500 dark:text-emerald-400",
    bgTint: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-500/30 dark:border-emerald-400/30",
  },
  {
    id: "subnet",
    name: "Optimismo de Subredes",
    shortName: "Subredes",
    description: "Diseño inteligente de topología de red para sensores.",
    longDescription:
      "Calcula y aconseja la máscara de red más eficiente (/26 de 62 hosts o /24 de 254 hosts) minimizando el desaprovechamiento de direcciones IP (direcciones residuales).",
    category: "redes",
    icon: "Network",
    colorClass: "text-blue-500 dark:text-blue-400",
    bgTint: "bg-blue-500/10 dark:bg-blue-400/10",
    borderColor: "border-blue-500/30 dark:border-blue-400/30",
  },
  {
    id: "maintenance",
    name: "Mantenimiento Predictivo",
    shortName: "Mantenimiento",
    description: "Alertas tempranas de fallas en semáforos y luminarias.",
    longDescription:
      "Analiza el flujo de errores recurrentes. Emite alertas de mantenimiento urgente y clasifica la severidad si se detecta un volumen alto de fallas en poco tiempo.",
    category: "soporte",
    icon: "Wrench",
    colorClass: "text-rose-500 dark:text-rose-400",
    bgTint: "bg-rose-500/10 dark:bg-rose-400/10",
    borderColor: "border-rose-500/30 dark:border-rose-400/30",
  },
  {
    id: "ecological",
    name: "Clasificador Ecológico",
    shortName: "Ecológico",
    description: "Gestión verde de residuos tecnológicos de la ciudad.",
    longDescription:
      "Clasifica el destino ecológico de equipamiento obsoleto en función de su antigüedad para impulsar la sostenibilidad municipal: Reciclar, Donar o Revender.",
    category: "ambiente",
    icon: "Leaf",
    colorClass: "text-teal-500 dark:text-teal-400",
    bgTint: "bg-teal-500/10 dark:bg-teal-400/10",
    borderColor: "border-teal-500/30 dark:border-teal-400/30",
  },
  {
    id: "bandwidth",
    name: "Regulador de Banda",
    shortName: "Ancho Banda",
    description: "Políticas de calidad de servicio (QoS) en horas pico.",
    longDescription:
      "Administra y distribuye el ancho de banda comunitario. Restringe la tasa de descarga a un máximo de 10 Mbps durante horarios laborales (08:00 a 18:00).",
    category: "redes",
    icon: "Activity",
    colorClass: "text-cyan-500 dark:text-cyan-400",
    bgTint: "bg-cyan-500/10 dark:bg-cyan-400/10",
    borderColor: "border-cyan-500/30 dark:border-cyan-400/30",
  },
  {
    id: "biometric_pin",
    name: "Sistema PIN Biométrico",
    shortName: "Acceso PIN",
    description: "Autenticación en centros de control e infraestructura.",
    longDescription:
      "Autentica personal técnico mediante PIN y dirección IP. Si se acumulan 3 intentos fallidos consecutivos, bloquea la dirección IP de forma preventiva.",
    category: "seguridad",
    icon: "Fingerprint",
    colorClass: "text-violet-500 dark:text-violet-400",
    bgTint: "bg-violet-500/10 dark:bg-violet-400/10",
    borderColor: "border-violet-500/30 dark:border-violet-400/30",
  },
  {
    id: "routing",
    name: "Enrutamiento Inteligente",
    shortName: "Rutas",
    description: "Optimización de caminos de datos de fibra óptica.",
    longDescription:
      "Compara latencias y costos de dos enlaces de fibra para elegir la ruta más veloz, cancelándola a favor de la opción económica si supera el presupuesto de $100.",
    category: "redes",
    icon: "CornerDownRight",
    colorClass: "text-orange-500 dark:text-orange-400",
    bgTint: "bg-orange-500/10 dark:bg-orange-400/10",
    borderColor: "border-orange-500/30 dark:border-orange-400/30",
  },
  {
    id: "flood",
    name: "Sensor de Inundación",
    shortName: "Inundaciones",
    description: "Monitoreo pluvial en alcantarillados y ríos.",
    longDescription:
      "Sistema de alerta climática que comprueba la velocidad de ascenso del nivel del agua. Alertas tempranas si se superan los 20 cm de aumento en menos de 10 minutos.",
    category: "ambiente",
    icon: "Droplets",
    colorClass: "text-sky-500 dark:text-sky-400",
    bgTint: "bg-sky-500/10 dark:bg-sky-400/10",
    borderColor: "border-sky-500/30 dark:border-sky-400/30",
  },
  {
    id: "billing",
    name: "Facturación Social",
    shortName: "Internet Social",
    description: "Cálculo de tarifas para el Plan de Internet Barrial.",
    longDescription:
      "Calculadora de tarifas subsidiadas: los primeros 50 GB son gratuitos, de 51 a 100 GB se cobra $1 por GB y los excesos sobre 100 GB se facturan a $2 por GB.",
    category: "energia",
    icon: "Receipt",
    colorClass: "text-purple-500 dark:text-purple-400",
    bgTint: "bg-purple-500/10 dark:bg-purple-400/10",
    borderColor: "border-purple-500/30 dark:border-purple-400/30",
  },
];

// Logic Implementations (mirroring Python exactly)

export function runEnergyLogic(rack1: number, rack2: number, rack3: number) {
  const racks = {
    rack1,
    rack2,
    rack3,
  };

  const total = rack1 + rack2 + rack3;

  const isOverloaded = total > 5000;

  let turnedOffRack: keyof typeof racks | null = null;

  const finalRacks = { ...racks };

  if (isOverloaded) {
    turnedOffRack = Object.keys(racks).reduce((highest, current) =>
      racks[current as keyof typeof racks] >
      racks[highest as keyof typeof racks]
        ? current
        : highest,
    ) as keyof typeof racks;

    finalRacks[turnedOffRack] = 0;
  }

  const finalTotal = finalRacks.rack1 + finalRacks.rack2 + finalRacks.rack3;

  return {
    totalOriginal: total,

    totalFinal: finalTotal,

    isOverloaded,

    turnedOffRack,

    message: isOverloaded
      ? `SOBRECARGA DETECTADA: ${turnedOffRack} fue apagado preventivamente.`
      : `SISTEMA ESTABLE: consumo dentro del límite.`,

    racksState: {
      rack1:
        turnedOffRack === "rack1" ? "APAGADO DE SEGURIDAD (0W)" : "OPERATIVO",

      rack2:
        turnedOffRack === "rack2" ? "APAGADO DE SEGURIDAD (0W)" : "OPERATIVO",

      rack3:
        turnedOffRack === "rack3" ? "APAGADO DE SEGURIDAD (0W)" : "OPERATIVO",
    },
  };
}

export function runWebFilterLogic(age: number, domain: string) {
  const normDomain = domain.trim().toLowerCase();
  const isMinor = age < 18;
  const isEdu = normDomain.endsWith(".edu") || normDomain.includes(".edu.");

  let accessGranted = true;
  let reason = "";

  if (isMinor) {
    if (isEdu) {
      accessGranted = true;
      reason =
        "ACCESO CONCEDIDO: Usuario menor de edad accediendo a dominio de carácter educativo (.edu).";
    } else {
      accessGranted = false;
      reason =
        "ACCESO DENEGADO: Los menores de 18 años únicamente tienen permitida la navegación en dominios educativos (.edu).";
    }
  } else {
    accessGranted = true;
    reason =
      "ACCESO CONCEDIDO: Usuario mayor de edad. Acceso ilimitado sin restricciones de filtrado.";
  }

  return {
    isMinor,
    isEdu,
    accessGranted,
    reason,
  };
}

export function runSubnetLogic(hosts: number) {
  let recommendation = "";
  let capacity = 0;
  let waste = 0;
  let details = "";

  if (hosts <= 62) {
    recommendation = "/26";
    capacity = 62;
    waste = 62 - hosts;
    details = `Recomendamos una máscara /26 (bloque de 64 direcciones, con 62 direcciónes útiles para hosts). Ideal para pequeños conglomerados de sensores.`;
  } else if (hosts <= 254) {
    recommendation = "/24";
    capacity = 254;
    waste = 254 - hosts;
    details = `Recomendamos una máscara /24 (bloque de 256 direcciones con 254 útiles). Estándar para nodos de interconexión urbana medianos.`;
  } else {
    // Over capacity of a single /24
    recommendation = "/23";
    capacity = 510;
    waste = 510 - hosts;
    details = `Alerta: El número de hosts supera la capacidad de una máscara estándar /24. Se recomienda configurar una máscara de mayor volumen como /23 (510 hosts utilizables) o segmentar en subredes múltiples.`;
  }

  return {
    hostsRequested: hosts,
    recommendation,
    capacity,
    waste,
    details,
  };
}

export function runMaintenanceLogic(errors: number, minutes: number) {
  const isCriticalTrigger = errors > 10 && minutes <= 5;
  let severity: "BAJA" | "MEDIA" | "ALTA" | "CRÍTICA" = "BAJA";
  let message = "";
  let recommendations: string[] = [];

  if (isCriticalTrigger) {
    if (errors > 25) {
      severity = "CRÍTICA";
      message = `¡ALERTAR PERSONAL DE EMERGENCIA! Sensor reporta volumen masivo de fallas críticas en un lapso extremo.`;
      recommendations = [
        "Despachar técnico de soporte en terreno inmediatamente.",
        "Activar desvío redundante de tráfico o luminaria de respaldo.",
        "Realizar apagado y encendido de hardware remotamente.",
      ];
    } else {
      severity = "ALTA";
      message = `Nivel de fallas acelerado. Se requiere supervisión de guardia técnica de forma prioritaria.`;
      recommendations = [
        "Agendar diagnóstico físico en las próximas 2 horas.",
        "Monitorear logs en vivo para aislar cortocircuitos.",
      ];
    }
  } else {
    if (errors >= 5) {
      severity = "MEDIA";
      message = `Tasa de errores moderada o con frecuencia dispersa. No hay riesgo de parada inminente.`;
      recommendations = [
        "Incluir en cronograma de mantenimiento general semanal.",
        "Revisar si hay polvo, suciedad o humedad sobre el panel óptico.",
      ];
    } else {
      severity = "BAJA";
      message = `Nivel normal. Ruidos o fluctuaciones estocásticas comunes de la red eléctrica municipal.`;
      recommendations = [
        "No requiere acción inmediata.",
        "Mantener registros estándar en la base de datos central.",
      ];
    }
  }

  return {
    errors,
    minutes,
    isCriticalTrigger,
    severity,
    message,
    recommendations,
  };
}

export function runEcologicalLogic(name: string, ageYears: number) {
  let action: "REVENDER" | "DONAR" | "RECICLAR" = "REVENDER";
  let badgeColor = "";
  let explanation = "";
  let targetHub = "";

  if (ageYears > 8) {
    action = "RECICLAR";
    badgeColor = "text-rose-500 bg-rose-500/10 border-rose-500/30";
    explanation =
      "El tiempo de servicio supera con creces el límite sugerido. Clasificado para desmantelado de componentes nocivos y fundido de metales nobles en puntos verdes.";
    targetHub =
      "Centro de Reciclado de Residuos Electrónicos (RAEE) - Sector Industrial";
  } else if (ageYears >= 3) {
    action = "DONAR";
    badgeColor = "text-amber-500 bg-amber-500/10 border-amber-500/30";
    explanation =
      "Artículo obsoleto para operaciones centrales de alta velocidad pero totalmente funcional para centros de formación vecinal, bibliotecas públicas o telecentros rurales.";
    targetHub =
      "Organizaciones No Gubernamentales (ONG) e Infraestructura Social Vecinal";
  } else {
    action = "REVENDER";
    badgeColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";
    explanation =
      "Adquisición de última data. Sigue reteniendo el 60-85% del valor de mercado original. Sugerido para subasta con el fin de reinvertir fondos en el erario municipal.";
    targetHub = "Portal de Renovación de Activos Tecnológicos del Municipio";
  }

  return {
    name: name || "Equipo Genérico",
    ageYears,
    action,
    badgeColor,
    explanation,
    targetHub,
  };
}

export function runBandwidthLogic(hour: number, requestedMbps: number) {
  const isPeakHour = hour >= 8 && hour <= 18;
  const limitValue = 10;

  let allowedMbps = requestedMbps;
  let isThrottled = false;
  let explanation = "";

  if (isPeakHour) {
    if (requestedMbps > limitValue) {
      allowedMbps = limitValue;
      isThrottled = true;
      explanation = `REGULACIÓN ACTIVA: En período pico laboral (${hour.toString().padStart(2, "0")}:00), los accesos residenciales se limitan a un umbral máximo de ${limitValue} Mbps para mantener operativos los servicios públicos primarios (hospitales, semáforos, centrales).`;
    } else {
      isThrottled = false;
      explanation = `REGULACIÓN NO APLICADA: Horario laboral activo (${hour.toString().padStart(2, "0")}:00), pero la tasa solicitada (${requestedMbps} Mbps) está dentro de los límites máximos permitidos en horas pico.`;
    }
  } else {
    isThrottled = false;
    explanation = `HORARIO LIBRE ENTRADO: Fuera de horario laboral pico (${hour.toString().padStart(2, "0")}:00). Tráfico liberado sin límites especiales de estrangulamiento.`;
  }

  return {
    hour,
    requestedMbps,
    allowedMbps,
    isPeakHour,
    isThrottled,
    explanation,
  };
}

export function runBiometricLogic(
  pinInput: string,
  previousAttempts: number,
  ipAddress: string,
  blockedIps: string[],
) {
  const masterPin = "4321"; // Standard diagnostic test PIN

  if (blockedIps.includes(ipAddress)) {
    return {
      status: "BLOQUEADO",
      attempts: previousAttempts,
      message: `INGRESO ABORTADO: La dirección IP [${ipAddress}] se encuentra permanentemente en la lista negra por repetidas vulneraciones previas.`,
      granted: false,
      shouldBlock: false,
      newAttemptsCount: previousAttempts,
    };
  }

  const isPinCorrect = pinInput.trim() === masterPin;
  if (isPinCorrect) {
    return {
      status: "CONCEDIDO",
      attempts: 0,
      message: `ACCESO EXITOSO: Credencial biométrica validada de forma satisfactoria. La dirección IP [${ipAddress}] ha sido autorizada para esta sesión de operaciones.`,
      granted: true,
      shouldBlock: false,
      newAttemptsCount: 0,
    };
  } else {
    const nextAttempts = previousAttempts + 1;
    const blockNow = nextAttempts >= 3;

    return {
      status: blockNow ? "BLOQUEADO" : "DENEGADO",
      attempts: nextAttempts,
      message: blockNow
        ? `SISTEMA ALERTA: Acceso denegado. Se alcanzó el límite crítico de intentos fallidos (3/3). La dirección IP [${ipAddress}] ha sido agregada a la lista negra municipal de seguridad cibernética.`
        : `CREDENCIAL RECHAZADA: PIN inválido. Intento fallido ${nextAttempts} de 3 acumulados para la IP [${ipAddress}]. Se bloqueará la IP al tercer intento.`,
      granted: false,
      shouldBlock: blockNow,
      newAttemptsCount: nextAttempts,
    };
  }
}

export function runRoutingLogic(
  r1_lat: number,
  r1_cost: number,
  r2_lat: number,
  r2_cost: number,
) {
  // pick fastest unless cost > $100, then pick cheapest
  let fastestRoute = 1;
  let fastestLatency = r1_lat;
  let fastestCost = r1_cost;

  if (r2_lat < r1_lat) {
    fastestRoute = 2;
    fastestLatency = r2_lat;
    fastestCost = r2_cost;
  } else if (r1_lat === r2_lat) {
    // if equal latency, the one with lower cost is defined as faster/better default
    if (r2_cost < r1_cost) {
      fastestRoute = 2;
      fastestLatency = r2_lat;
      fastestCost = r2_cost;
    }
  }

  let selectedRoute = fastestRoute;
  let overrideHappened = false;
  let selectionReason = "";

  if (fastestCost > 100) {
    overrideHappened = true;
    // pick cheapest
    if (r1_cost < r2_cost) {
      selectedRoute = 1;
      selectionReason = `ENLACE COSTOSO AJUSTADO: El enlace más rápido original (Ruta ${fastestRoute}) excede el presupuesto de $100 (Costo: $${fastestCost}). Se redirige el flujo de datos automáticamente al enlace de menor costo: Ruta 1 ($${r1_cost}, Latencia: ${r1_lat}ms).`;
    } else {
      selectedRoute = 2;
      selectionReason = `ENLACE COSTOSO AJUSTADO: El enlace más rápido original (Ruta ${fastestRoute}) excede el presupuesto de $100 (Costo: $${fastestCost}). Se redirige el flujo de datos automáticamente al enlace de menor costo: Ruta 2 ($${r2_cost}, Latencia: ${r2_lat}ms).`;
    }
  } else {
    overrideHappened = false;
    selectionReason = `PRESUPUESTO APROBADO: El enlace con menor retraso (Ruta ${selectedRoute}) está dentro de los límites presupuestarios ($${fastestCost} <= $100). Optimizando el tiempo de respuesta: latencia retenida de ${fastestLatency}ms.`;
  }

  return {
    selectedRoute,
    overrideHappened,
    selectionReason,
    metrics: {
      r1: { latency: r1_lat, cost: r1_cost, isPicked: selectedRoute === 1 },
      r2: { latency: r2_lat, cost: r2_cost, isPicked: selectedRoute === 2 },
    },
  };
}

export function runFloodLogic(
  initLevel: number,
  curLevel: number,
  minutes: number,
) {
  const rise = curLevel - initLevel;
  // Alarm if level rise > 20cm in < 10min.
  const isAlarmTriggered = rise > 20 && minutes < 10;

  let risk: "NULO" | "BAJO" | "ALTO" | "CRÍTICO" = "NULO";
  let message = "";

  if (isAlarmTriggered) {
    if (rise > 45) {
      risk = "CRÍTICO";
      message = `¡EVACUACIÓN / ALERTA CRÍTICA pluvial! Crecida abrupta de ${rise} cm de agua en apenas ${minutes} minutos. Aliviaderos municipales en colapso.`;
    } else {
      risk = "ALTO";
      message = `¡INUNDACIÓN PRECOZ DETECTADA! Incremento acelerado de ${rise} cm de agua en un intervalo de ${minutes} minutos. Compuestas secundarias abriéndose.`;
    }
  } else {
    if (rise > 10) {
      risk = "BAJO";
      message = `Nivel y flujo de caudal elevados, pero estable bajo esquemas de escurrimiento natural de las cuencas.`;
    } else if (rise > 0) {
      risk = "BAJO";
      message = `Oleaje y precipitación sin repercusiones significativas de acumulación hidráulica urbana.`;
    } else {
      risk = "NULO";
      message = `Drenajes normales. Se evidencia descenso progresivo o estabilidad en el nivel basal registrado.`;
    }
  }

  return {
    rise,
    minutes,
    isAlarmTriggered,
    risk,
    message,
  };
}

export function runBillingLogic(name: string, gb: number) {
  const client = name.trim() || "Cliente Vecinal";

  let cost = 0;

  let breakdown: string[] = [];

  if (gb <= 50) {
    cost = 0;

    breakdown = [
      `Subsidio Social Completo`,
      `0-50 GB gratuitos`,
      `Consumo: ${gb} GB`,
    ];
  } else if (gb <= 100) {
    const surplus = gb - 50;

    cost = surplus;

    breakdown = [
      `Primeros 50 GB gratuitos`,
      `${surplus.toFixed(1)} GB facturados a $1`,
      `Tarifa social aplicada`,
    ];
  } else {
    const highSurplus = gb - 100;

    cost = 50 + highSurplus * 2;

    breakdown = [
      `50 GB gratuitos`,
      `50 GB intermedios ($50)`,
      `${highSurplus.toFixed(1)} GB extra a $2`,
    ];
  }

  return {
    client,

    gbConsumed: gb,

    totalBill: cost,

    breakdown,
  };
}
