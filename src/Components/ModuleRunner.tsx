import React, { useState } from "react";
import { ModuleId } from "../../types";
import {
  runEnergyLogic,
  runWebFilterLogic,
  runSubnetLogic,
  runMaintenanceLogic,
  runEcologicalLogic,
  runBandwidthLogic,
  runBiometricLogic,
  runRoutingLogic,
  runFloodLogic,
  runBillingLogic,
} from "../../modulesData";

interface ModuleRunnerProps {
  moduleId: ModuleId;
}

export default function ModuleRunner({ moduleId }: ModuleRunnerProps) {
  // --- STATE FOR ENERGY MANAGEMENT ---
  const [energyRack1, setEnergyRack1] = useState("1800");
  const [energyRack2, setEnergyRack2] = useState("1600");
  const [energyRack3, setEnergyRack3] = useState("2000");
  const [energyResult, setEnergyResult] = useState<any>(null);

  // --- STATE FOR WEB ACCESS FILTER ---
  const [webAge, setWebAge] = useState("16");
  const [webDomain, setWebDomain] = useState("colegio.edu");
  const [webResult, setWebResult] = useState<any>(null);

  // --- STATE FOR SUBNET OPTIMIZER ---
  const [subnetHosts, setSubnetHosts] = useState("45");
  const [subnetResult, setSubnetResult] = useState<any>(null);

  // --- STATE FOR PREDICTIVE MAINTENANCE ---
  const [maintErrors, setMaintErrors] = useState("12");
  const [maintMinutes, setMaintMinutes] = useState("4");
  const [maintResult, setMaintResult] = useState<any>(null);

  // --- STATE FOR ECOLOGICAL CLASSIFIER ---
  const [ecoName, setEcoName] = useState("Switch Cisco Catalyst 2960");
  const [ecoAge, setEcoAge] = useState("5");
  const [ecoResult, setEcoResult] = useState<any>(null);

  // --- STATE FOR BANDWIDTH REGULATOR ---
  const [bandHour, setBandHour] = useState("14"); // 2 PM
  const [bandRequested, setBandRequested] = useState("25");
  const [bandResult, setBandResult] = useState<any>(null);

  // --- STATE FOR BIOMETRIC PIN SYSTEM ---
  const [bioPin, setBioPin] = useState("");
  const [bioIp, setBioIp] = useState("192.168.10.45");
  const [bioAttempts, setBioAttempts] = useState(0); // Live attempt counter
  const [blockedIps, setBlockedIps] = useState<string[]>(["10.0.0.99"]); // Pre-blocked demo IP
  const [bioResult, setBioResult] = useState<any>(null);

  // --- STATE FOR SMART ROUTING ---
  const [route1Lat, setRoute1Lat] = useState("40");
  const [route1Cost, setRoute1Cost] = useState("45");
  const [route2Lat, setRoute2Lat] = useState("25");
  const [route2Cost, setRoute2Cost] = useState("120");
  const [routeResult, setRouteResult] = useState<any>(null);

  // --- STATE FOR FLOOD ALERT SENSOR ---
  const [floodInit, setFloodInit] = useState("15");
  const [floodCurr, setFloodCurr] = useState("42");
  const [floodMin, setFloodMin] = useState("8");
  const [floodResult, setFloodResult] = useState<any>(null);

  // --- STATE FOR SOCIAL BILLING ---
  const [billClient, setBillClient] = useState("Carlos Mendoza");
  const [billGb, setBillGb] = useState("85");
  const [billResult, setBillResult] = useState<any>(null);

  // General Reset function
  const handleReset = () => {
    setEnergyResult(null);
    setWebResult(null);
    setSubnetResult(null);
    setMaintResult(null);
    setEcoResult(null);
    setBandResult(null);
    setBioResult(null);
    setRouteResult(null);
    setFloodResult(null);
    setBillResult(null);
  };

  // --- SUBMIT HANLDERS ---
  const handleCalculateEnergy = (e: React.FormEvent) => {
    e.preventDefault();
    const r1 = parseFloat(energyRack1) || 0;
    const r2 = parseFloat(energyRack2) || 0;
    const r3 = parseFloat(energyRack3) || 0;
    const out = runEnergyLogic(r1, r2, r3);
    setEnergyResult(out);
  };

  const handleCalculateWeb = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(webAge) || 0;
    const out = runWebFilterLogic(age, webDomain);
    setWebResult(out);
  };

  const handleCalculateSubnet = (e: React.FormEvent) => {
    e.preventDefault();
    const hosts = parseInt(subnetHosts) || 0;
    const out = runSubnetLogic(hosts);
    setSubnetResult(out);
  };

  const handleCalculateMaint = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = parseInt(maintErrors) || 0;
    const minutes = parseFloat(maintMinutes) || 0;
    const out = runMaintenanceLogic(errs, minutes);
    setMaintResult(out);
  };

  const handleCalculateEco = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseFloat(ecoAge) || 0;
    const out = runEcologicalLogic(ecoName, age);
    setEcoResult(out);
  };

  const handleCalculateBandwidth = (e: React.FormEvent) => {
    e.preventDefault();
    const hr = parseInt(bandHour) || 0;
    const req = parseFloat(bandRequested) || 0;
    const out = runBandwidthLogic(hr, req);
    setBandResult(out);
  };

  const handleCalculateBiometric = (e: React.FormEvent) => {
    e.preventDefault();
    const out = runBiometricLogic(bioPin, bioAttempts, bioIp, blockedIps);
    if (out.shouldBlock) {
      setBlockedIps((prev) => [...prev, bioIp]);
    }
    setBioAttempts(out.newAttemptsCount);
    setBioResult(out);
  };

  const resetPinSystem = () => {
    setBioAttempts(0);
    setBioPin("");
    setBlockedIps(["10.0.0.99"]);
    setBioResult(null);
  };

  const handleCalculateRouting = (e: React.FormEvent) => {
    e.preventDefault();
    const r1Lat = parseFloat(route1Lat) || 0;
    const r1Cost = parseFloat(route1Cost) || 0;
    const r2Lat = parseFloat(route2Lat) || 0;
    const r2Cost = parseFloat(route2Cost) || 0;
    const out = runRoutingLogic(r1Lat, r1Cost, r2Lat, r2Cost);
    setRouteResult(out);
  };

  const handleCalculateFlood = (e: React.FormEvent) => {
    e.preventDefault();
    const init = parseFloat(floodInit) || 0;
    const curr = parseFloat(floodCurr) || 0;
    const min = parseFloat(floodMin) || 0;
    const out = runFloodLogic(init, curr, min);
    setFloodResult(out);
  };

  const handleCalculateBilling = (e: React.FormEvent) => {
    e.preventDefault();
    const gb = parseFloat(billGb) || 0;
    const out = runBillingLogic(billClient, gb);
    setBillResult(out);
  };

  // Helper ascii bar builder for desaturated physical readout
  const buildAsciiBar = (value: number, max: number) => {
    const barsCount = 15;
    const filledCount = Math.min(
      Math.round((value / max) * barsCount),
      barsCount,
    );
    const emptyCount = Math.max(barsCount - filledCount, 0);
    return `[${"■".repeat(filledCount)}${"□".repeat(emptyCount)}]`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 max-w-7xl mx-auto items-start font-sans">
      {/* LEFT COLUMN: Input Form Panel */}
      <div className="bg-[#FCFCFA] dark:bg-red-500/90 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 rounded-none">
        <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-6 flex justify-between items-baseline font-mono">
          <div>
            <span className="text-[10px] font-bold text-neutral-450 dark:text-white uppercase tracking-widest block">
              módulo_actual // cons_parámetros
            </span>
            <h2 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-1">
              {moduleId === "energy" && "01. GESTIÓN DE ENERGÍA"}
              {moduleId === "web_filter" && "02. FILTRO DE ACCESO WEB"}
              {moduleId === "subnet" && "03. OPTIMIZACIÓN DE SUBREDES"}
              {moduleId === "maintenance" && "04. MANTENIMIENTO PREDICTIVO"}
              {moduleId === "ecological" && "05. CLASIFICACIÓN ECOLÓGICA"}
              {moduleId === "bandwidth" && "06. REGULADOR DE BANDA"}
              {moduleId === "biometric_pin" && "07. AUTENTICACIÓN BIOMÉTRICA"}
              {moduleId === "routing" && "08. ENRUTADO INTELIGENTE"}
              {moduleId === "flood" && "09. SENSOR PLAN DE INUNDACIÓN"}
              {moduleId === "billing" && "10. FACTURACIÓN BARRIAL"}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-[10px] hover:text-neutral-905 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 px-2 py-0.5"
            title="Restablecer variables locales"
          >
            reinicio_variables
          </button>
        </div>

        <div>
          {/* 1. ENERGY MANAGEMENT FORM */}
          {moduleId === "energy" && (
            <form onSubmit={handleCalculateEnergy} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Si la suma del consumo de
                los racks de telecomunicación excede el umbral crítico de 5000
                W, se desconecta de forma automática el Rack 3 para estabilizar
                el circuito de alimentación primario.
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="rack1"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Consumo Rack 1 - Alta Prioridad (W)
                  </label>
                  <input
                    id="rack1"
                    type="number"
                    min="0"
                    placeholder="W"
                    value={energyRack1}
                    onChange={(e) => setEnergyRack1(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rack2"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Consumo Rack 2 - Prioridad Media (W)
                  </label>
                  <input
                    id="rack2"
                    type="number"
                    min="0"
                    placeholder="W"
                    value={energyRack2}
                    onChange={(e) => setEnergyRack2(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rack3"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Consumo Rack 3 - Baja Prioridad (W)
                  </label>
                  <input
                    id="rack3"
                    type="number"
                    min="0"
                    placeholder="W"
                    value={energyRack3}
                    onChange={(e) => setEnergyRack3(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                ejecutar_simulador_energético
              </button>
            </form>
          )}

          {/* 2. WEB ACCESS FILTER FORM */}
          {moduleId === "web_filter" && (
            <form onSubmit={handleCalculateWeb} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Conforme al reglamento de
                navegación de la red pública, menores de 18 años solo se
                autorizan a ingresar en dominios educativos (extensión{" "}
                <code>.edu</code>).
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="web_age"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Edad del Solicitante
                  </label>
                  <input
                    id="web_age"
                    type="number"
                    min="1"
                    max="110"
                    value={webAge}
                    onChange={(e) => setWebAge(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="web_domain"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Dominio Web Solicitado
                  </label>
                  <input
                    id="web_domain"
                    type="text"
                    value={webDomain}
                    onChange={(e) => setWebDomain(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] text-white uppercase self-center font-mono">
                      muestras:
                    </span>
                    {[
                      "colegio.edu",
                      "google.com",
                      "biblioteca.edu",
                      "facebook.com",
                    ].map((dm) => (
                      <button
                        key={dm}
                        type="button"
                        onClick={() => setWebDomain(dm)}
                        className="text-[9px] font-mono px-1.5 py-0.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-white"
                      >
                        {dm}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                evaluar_firewall
              </button>
            </form>
          )}

          {/* 3. SUBNET OPTIMIZER FORM */}
          {moduleId === "subnet" && (
            <form onSubmit={handleCalculateSubnet} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Determina la topología
                idónea para la subred de hosts dada. El algoritmo elige de forma
                óptima entre CIDR <code>/26</code> (máximo 62 terminales útiles)
                o CIDR <code>/24</code> (hasta 254 terminales).
              </div>

              <div>
                <label
                  htmlFor="subnet_hosts"
                  className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                >
                  Cantidad de Hosts Requeridos
                </label>
                <input
                  id="subnet_hosts"
                  type="number"
                  min="1"
                  max="500"
                  value={subnetHosts}
                  onChange={(e) => setSubnetHosts(e.target.value)}
                  required
                  className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] text-white self-center font-mono">
                    hosts_comunes:
                  </span>
                  {["30", "58", "115", "240"].map((hst) => (
                    <button
                      key={hst}
                      type="button"
                      onClick={() => setSubnetHosts(hst)}
                      className="text-[9px] font-mono px-1.5 py-0.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-white"
                    >
                      {hst} ips
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                calcular_CIDR_óptimo
              </button>
            </form>
          )}

          {/* 4. PREDICTIVE MAINTENANCE FORM */}
          {moduleId === "maintenance" && (
            <form onSubmit={handleCalculateMaint} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Alerta crítica al centro
                de reparaciones si ocurren más de 10 incidentes en un intervalo
                inferior o igual a 5 minutos. Clasificación formal de desgaste.
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="maint_errors"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Nro. de Incidentes
                  </label>
                  <input
                    id="maint_errors"
                    type="number"
                    min="0"
                    value={maintErrors}
                    onChange={(e) => setMaintErrors(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="maint_minutes"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Intervalo Temporal (Minutos)
                  </label>
                  <input
                    id="maint_minutes"
                    type="number"
                    min="1"
                    value={maintMinutes}
                    onChange={(e) => setMaintMinutes(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                evaluar_riesgo_mantenimiento
              </button>
            </form>
          )}

          {/* 5. ECOLOGICAL CLASSIFIER FORM */}
          {moduleId === "ecological" && (
            <form onSubmit={handleCalculateEco} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Determina el canal
                reciclador sustentable conforme a la antigüedad del dispositivo:
                mayor de 8 años se recicla, de 3 a 8 se dona, y menor de 3 se
                orienta a reventa.
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="eco_name"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Nombre del Activo Tecnológico
                  </label>
                  <input
                    id="eco_name"
                    type="text"
                    value={ecoName}
                    onChange={(e) => setEcoName(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eco_age"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Antigüedad del Equipo (Años)
                  </label>
                  <input
                    id="eco_age"
                    type="number"
                    min="0"
                    value={ecoAge}
                    onChange={(e) => setEcoAge(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                clasificar_disposición_sustentable
              </button>
            </form>
          )}

          {/* 6. BANDWIDTH REGULATOR FORM */}
          {moduleId === "bandwidth" && (
            <form onSubmit={handleCalculateBandwidth} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Limita preventivamente
                ancho de banda a un límite de 10 Mbps durante horarios hábiles
                concurrentes (08:00 a 18:00) si la demanda excede dicho volumen.
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="band_hour_range"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-2 flex justify-between font-mono"
                  >
                    <span>Hora Registrada del Tránsito (24h)</span>
                    <span className="text-[#5C6B73] dark:text-yellow-400 font-bold">
                      {bandHour.toString().padStart(2, "0")}:00 hrs
                    </span>
                  </label>
                  <input
                    id="band_hour_range"
                    type="range"
                    min="0"
                    max="23"
                    value={bandHour}
                    onChange={(e) => setBandHour(e.target.value)}
                    className="w-full h-1 bg-neutral-300 dark:bg-neutral-700 rounded-none appearance-none cursor-pointer accent-[#5C6B73]"
                  />
                  <div className="flex justify-between text-[9px] text-white font-mono mt-1">
                    <span>00:00</span>
                    <span className="text-white font-bold">
                      INTERVALO PICO (08:00 - 18:00)
                    </span>
                    <span>23:00</span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="band_requested"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Ancho de Banda Solicitado (Mbps)
                  </label>
                  <input
                    id="band_requested"
                    type="number"
                    min="1"
                    max="1000"
                    value={bandRequested}
                    onChange={(e) => setBandRequested(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                evaluar_flujo_red
              </button>
            </form>
          )}

          {/* 7. BIOMETRIC PIN SYSTEM FORM */}
          {moduleId === "biometric_pin" && (
            <form onSubmit={handleCalculateBiometric} className="space-y-4">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs font-mono">
                <strong className="text-white">código_pin_válido:</strong>{" "}
                <code className="bg-[#FAF9F5] text-[#5C6B73] dark:bg-[#1C1C1E] px-1 font-bold">
                  4321
                </code>
                <p className="mt-1 text-[11px] font-sans">
                  El acumulamiento de 3 intentos inválidos bloquea
                  permanentemente la dirección IP origen.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="bio_pin"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Cifrado PIN Técnico (Numérico)
                  </label>
                  <input
                    id="bio_pin"
                    type="password"
                    maxLength={4}
                    placeholder="• • • •"
                    value={bioPin}
                    onChange={(e) =>
                      setBioPin(e.target.value.replace(/\D/g, ""))
                    }
                    required
                    className="w-full px-3 py-2 text-center text-sm tracking-widest rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bio_ip"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Dirección IP del Dispositivo Origen
                  </label>
                  <input
                    id="bio_ip"
                    type="text"
                    value={bioIp}
                    onChange={(e) => setBioIp(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] text-white self-center font-mono">
                      filtrar_ip:
                    </span>
                    {["192.168.10.45", "172.16.5.120", "10.0.0.99"].map(
                      (ip) => (
                        <button
                          key={ip}
                          type="button"
                          onClick={() => setBioIp(ip)}
                          className={`text-[9px] font-mono px-1.5 py-0.5 border ${
                            blockedIps.includes(ip)
                              ? "border-neutral-300 dark:border-neutral-700 hover:bg-blue-500 dark:bg-neutral-800 text-white"
                              : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-white hover:bg-neutral-100 dark:hover:bg-blue-900"
                          }`}
                        >
                          {ip} {blockedIps.includes(ip) ? "(bloq)" : ""}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* Simulated session counters */}
                <div className="grid grid-cols-2 gap-3 p-3 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 font-mono text-[10px]">
                  <div>
                    <span className="text-neutral-450 block uppercase text-[8px] font-bold">
                      Intentos de Sesión
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-bold">
                      {bioAttempts} de 3 máx.
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-450 block uppercase text-[8px] font-bold">
                      Filtros Activos IP
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-bold">
                      {blockedIps.length} registradas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
                >
                  autenticar_consola
                </button>
                <button
                  type="button"
                  onClick={resetPinSystem}
                  className="px-3 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-550 hover:hover:bg-blue-500 text-xs font-mono"
                  title="Reiniciar simulador biométrico"
                >
                  limpiar
                </button>
              </div>
            </form>
          )}

          {/* 8. SMART ROUTING FORM */}
          {moduleId === "routing" && (
            <form onSubmit={handleCalculateRouting} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Privilegia el canal óptico
                de menor latencia. No obstante, si el costo operacional de la
                ruta óptima sobrepasa los $100 se designa la vía redundante más
                económica.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
                {/* Route 1 Column */}
                <div className="p-4 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 space-y-3">
                  <h3 className="text-[10px] font-bold text-neutral-600 dark:text-white uppercase border-b border-neutral-300 dark:border-neutral-800 pb-1">
                    01. Enlace Ruta 1 (Fibra)
                  </h3>
                  <div>
                    <label
                      htmlFor="route_1_lat"
                      className="block text-[9px] uppercase font-bold text-white mb-0.5"
                    >
                      Latencia (ms)
                    </label>
                    <input
                      id="route_1_lat"
                      type="number"
                      min="1"
                      value={route1Lat}
                      onChange={(e) => setRoute1Lat(e.target.value)}
                      required
                      className="w-full px-2 py-1 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="route_1_cost"
                      className="block text-[9px] uppercase font-bold text-white mb-0.5"
                    >
                      Costo ($)
                    </label>
                    <input
                      id="route_1_cost"
                      type="number"
                      min="0"
                      value={route1Cost}
                      onChange={(e) => setRoute1Cost(e.target.value)}
                      required
                      className="w-full px-2 py-1 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                    />
                  </div>
                </div>

                {/* Route 2 Column */}
                <div className="p-4 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 space-y-3">
                  <h3 className="text-[10px] font-bold text-neutral-600 dark:text-white uppercase border-b border-neutral-300 dark:border-neutral-800 pb-1">
                    02. Enlace Ruta 2 (Sat)
                  </h3>
                  <div>
                    <label
                      htmlFor="route_2_lat"
                      className="block text-[9px] uppercase font-bold text-white mb-0.5"
                    >
                      Latencia (ms)
                    </label>
                    <input
                      id="route_2_lat"
                      type="number"
                      min="1"
                      value={route2Lat}
                      onChange={(e) => setRoute2Lat(e.target.value)}
                      required
                      className="w-full px-2 py-1 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="route_2_cost"
                      className="block text-[9px] uppercase font-bold text-white mb-0.5"
                    >
                      Costo ($)
                    </label>
                    <input
                      id="route_2_cost"
                      type="number"
                      min="0"
                      value={route2Cost}
                      onChange={(e) => setRoute2Cost(e.target.value)}
                      required
                      className="w-full px-2 py-1 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 font-mono">
                <span className="text-[9px] text-white self-center">
                  escenarios:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setRoute1Lat("40");
                    setRoute1Cost("45");
                    setRoute2Lat("25");
                    setRoute2Cost("120");
                  }}
                  className="text-[9px] px-1.5 py-0.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-blue-900 text-neutral-600 dark:text-white"
                >
                  límite_costado_r2
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRoute1Lat("18");
                    setRoute1Cost("95");
                    setRoute2Lat("35");
                    setRoute2Cost("60");
                  }}
                  className="text-[9px] px-1.5 py-0.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-blue-900 text-neutral-600 dark:text-white"
                >
                  fibra_segura_r1
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                evaluar_enrutamiento
              </button>
            </form>
          )}

          {/* 9. FLOOD ALERT SENSOR FORM */}
          {moduleId === "flood" && (
            <form onSubmit={handleCalculateFlood} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Desencadena la señal de
                alarma fluvial de desborde si el nivel acumulado incrementa más
                de 20 cm en un lapso temporal menor a 10 minutos.
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono">
                <div>
                  <label
                    htmlFor="flood_init"
                    className="block text-[9px] font-bold text-neutral-500 uppercase mb-1"
                  >
                    Nivel Inicial (cm)
                  </label>
                  <input
                    id="flood_init"
                    type="number"
                    min="0"
                    value={floodInit}
                    onChange={(e) => setFloodInit(e.target.value)}
                    required
                    className="w-full px-2 py-1.5 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="flood_curr"
                    className="block text-[9px] font-bold text-neutral-500 uppercase mb-1"
                  >
                    Nivel Actual (cm)
                  </label>
                  <input
                    id="flood_curr"
                    type="number"
                    min="0"
                    value={floodCurr}
                    onChange={(e) => setFloodCurr(e.target.value)}
                    required
                    className="w-full px-2 py-1.5 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="flood_min"
                    className="block text-[9px] font-bold text-neutral-500 uppercase mb-1"
                  >
                    Lapso (Minutos)
                  </label>
                  <input
                    id="flood_min"
                    type="number"
                    min="1"
                    value={floodMin}
                    onChange={(e) => setFloodMin(e.target.value)}
                    required
                    className="w-full px-2 py-1.5 text-xs rounded-none border border-neutral-300 dark:border-neutral-700 bg-gray-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                evaluar_riesgo_desborde
              </button>
            </form>
          )}

          {/* 10. SOCIAL INTERNET BILLING FORM */}
          {moduleId === "billing" && (
            <form onSubmit={handleCalculateBilling} className="space-y-6">
              <div className="p-3 bg-[#F4F3EE] dark:bg-[#252526] border-l-2 border-[#5C6B73] text-neutral-600 dark:text-neutral-500 text-xs">
                <strong className="text-white">directiva_operación:</strong> Tarifa barrial
                subvencionada. 50 GB iniciales sin costo social. Desde 51 a 100
                GB se cobra $1 por GB excedido, superiores a 100 GB se tasan a
                $2 por GB.
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="billing_name"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Nombre del Contratante
                  </label>
                  <input
                    id="billing_name"
                    type="text"
                    value={billClient}
                    onChange={(e) => setBillClient(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="billing_gb"
                    className="block text-[10px] font-bold text-neutral-500 dark:text-white uppercase tracking-wider mb-1 font-mono"
                  >
                    Volumen de Tráfico Mensual (GB)
                  </label>
                  <input
                    id="billing_gb"
                    type="number"
                    min="0"
                    value={billGb}
                    onChange={(e) => setBillGb(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 text-xs rounded-none border border-neutral-350 dark:border-neutral-700 bg-gray-500 dark:bg-[#1C1C1E] text-neutral-800 dark:text-neutral-200 focus:outline-none focus:border-[#5C6B73] font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-neutral-400 dark:border-neutral-700 bg-neutral-100 hover:hover:bg-blue-500 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-mono text-xs uppercase cursor-pointer text-center font-bold"
              >
                liquidar_factura_social
              </button>
            </form>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Results Display Panel formatted like typewriter/terminal sheets */}
      <div className="bg-[#FAF9F5] dark:bg-[#1B1B1C] border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 rounded-none min-h-[460px] flex flex-col justify-between">
        {/* Default Waiting Screen */}
        {((moduleId === "energy" && !energyResult) ||
          (moduleId === "web_filter" && !webResult) ||
          (moduleId === "subnet" && !subnetResult) ||
          (moduleId === "maintenance" && !maintResult) ||
          (moduleId === "ecological" && !ecoResult) ||
          (moduleId === "bandwidth" && !bandResult) ||
          (moduleId === "biometric_pin" && !bioResult) ||
          (moduleId === "routing" && !routeResult) ||
          (moduleId === "flood" && !floodResult) ||
          (moduleId === "billing" && !billResult)) && (
          <div className="flex-1 flex flex-col items-center justify-center py-20 text-center font-mono">
            <span className="text-neutral-350 dark:text-neutral-600 block text-xs tracking-tight">
              // esperando_señales_simulacion
            </span>
            <p className="text-[10px] text-white mt-2 max-w-xs leading-normal font-sans">
              Complete los parámetros operacionales de valor en la consola
              izquierda y pulse ejecutar para imprimir la bitácora de
              resultados.
            </p>
          </div>
        )}

        {/* 1. ENERGY RESULTS */}
        {moduleId === "energy" && energyResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_01]
              </div>

              <div className="space-y-1.5">
                <p>
                  <span className="font-bold uppercase text-neutral-450 text-[10px]">
                    ESTADO_RED:
                  </span>{" "}
                  {energyResult.isOverloaded
                    ? "REGULACIÓN_CON_RESTRICCIÓN"
                    : "SUMINISTRO_ESTABLE"}
                </p>
                <p>
                  <span className="font-bold uppercase text-neutral-450 text-[10px]">
                    DETALLES:
                  </span>{" "}
                  {energyResult.message}
                </p>
              </div>

              <div className="border-t border-b border-neutral-250 dark:border-neutral-800 py-3 space-y-2">
                <span className="text-[9px] font-bold text-white block uppercase tracking-wider">
                  // balance_por_racks
                </span>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span>Rack 1 (Crítico) : {energyRack1}W</span>
                    <span>
                      {buildAsciiBar(parseFloat(energyRack1) || 0, 3000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>Rack 2 (Interm) : {energyRack2}W</span>
                    <span>
                      {buildAsciiBar(parseFloat(energyRack2) || 0, 3000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>
                      Rack 3 (Redund) : {energyRack3}W{" "}
                      {energyResult.rack3TurnedOff ? "[APAGADO]" : ""}
                    </span>
                    <span>
                      {energyResult.rack3TurnedOff
                        ? "[--- LIMITADO ---]"
                        : buildAsciiBar(parseFloat(energyRack3) || 0, 3000)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-300 dark:border-neutral-800 p-2 text-center bg-gray-500 dark:bg-[#1C1C1E]">
                  <span className="block text-[8px] text-white uppercase font-bold">
                    Consumo Reclamado
                  </span>
                  <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                    {energyResult.totalOriginal} W
                  </span>
                </div>
                <div className="border border-neutral-300 dark:border-neutral-800 p-2 text-center bg-gray-500 dark:bg-[#1C1C1E]">
                  <span className="block text-[8px] text-white uppercase font-bold">
                    Consumo Sostenible
                  </span>
                  <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                    {energyResult.totalFinal} W
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Evaluación técnica generada de forma offline en base a los
              estándares locales de la matriz de energía.
            </div>
          </div>
        )}

        {/* 2. WEB FILTRATION RESULTS */}
        {moduleId === "web_filter" && webResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_02]
              </div>

              <table className="w-full text-left font-mono text-xs">
                <tbody>
                  <tr className="border-b border-neutral-250 dark:border-neutral-800">
                    <td className="py-2 font-bold text-white uppercase text-[9px]">
                      Resultado Firewall
                    </td>
                    <td className="py-2 text-right font-bold text-neutral-800 dark:text-neutral-100 uppercase">
                      {webResult.accessGranted
                        ? "ACCESO_CONCEDIDO"
                        : "ACCESO_DENEGADO"}
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-250 dark:border-neutral-800">
                    <td className="py-2 font-bold text-white uppercase text-[9px]">
                      Sujeto de Consulta
                    </td>
                    <td className="py-2 text-right">
                      {webResult.isMinor
                        ? "Menor de Edad"
                        : "Sujeto Autorizado (+18)"}
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-250 dark:border-neutral-800">
                    <td className="py-2 font-bold text-white uppercase text-[9px]">
                      Dominio Inspeccionado
                    </td>
                    <td className="py-2 text-right font-bold">{webDomain}</td>
                  </tr>
                  <tr className="border-b border-neutral-250 dark:border-neutral-800">
                    <td className="py-2 font-bold text-white uppercase text-[9px]">
                      Sub-carácter didáctico
                    </td>
                    <td className="py-2 text-right font-bold">
                      {webResult.isEdu
                        ? "Detección .EDU (Sí)"
                        : "Detección comercial (No)"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="p-3 bg-neutral-100 dark:bg-[#1E1E1F] border border-neutral-300 dark:border-neutral-800 font-sans text-xs">
                <strong className="text-white">Justificación del filtro:</strong> {webResult.reason}
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Certificado conforme a las normativas de navegación lúdica y
              educativa municipal.
            </div>
          </div>
        )}

        {/* 3. SUBNET RESULTS */}
        {moduleId === "subnet" && subnetResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_03]
              </div>

              <div className="border border-neutral-350 dark:border-neutral-800 bg-gray-500 dark:bg-neutral-900 p-4">
                <span className="text-[8px] text-white block uppercase font-bold mb-1">
                  MÁSCARA DE RED ESTABLECIDA
                </span>
                <span className="text-base font-bold text-neutral-850 dark:text-neutral-100">
                  {subnetResult.recommendation}
                </span>
                <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                  {subnetResult.details}
                </p>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800/60 pb-1">
                  <span className="text-white">
                    Direcciones Solicitadas :
                  </span>
                  <span>{subnetResult.hostsRequested} terminales</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800/60 pb-1">
                  <span className="text-white">
                    Capacidad Bruta del CIDR :
                  </span>
                  <span>{subnetResult.capacity} terminales útiles</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800/60 pb-1 text-neutral-600 dark:text-neutral-450">
                  <span>Direcciones Residuales (Merma) :</span>
                  <span>{subnetResult.waste} IPs inutilizadas</span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Directrices de direccionamiento IPv4 para enrutamiento en
              pasarelas locales.
            </div>
          </div>
        )}

        {/* 4. PREDICTIVE MAINTENANCE RESULTS */}
        {moduleId === "maintenance" && maintResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_04]
              </div>

              <div
                className={
                  maintResult.isCriticalTrigger
                    ? "border border-neutral-400 p-3 hover:bg-blue-500 text-neutral-900"
                    : "border border-neutral-300 p-3"
                }
              >
                <span className="text-[8px] font-bold block uppercase text-neutral-500 mb-1">
                  Severidad de Fallos Registrada
                </span>
                <span className="text-sm font-extrabold uppercase">
                  {maintResult.severity} //{" "}
                  {maintResult.isCriticalTrigger
                    ? "SITUACIÓN CRÍTICA DETECTADA"
                    : "PARÁMETROS REGULARES"}
                </span>
                <p className="font-sans text-xs mt-1 leading-normal">
                  {maintResult.message}
                </p>
              </div>

              <div className="space-y-1.5 font-sans">
                <span className="text-[10px] font-mono font-bold text-white block uppercase tracking-wider">
                  // protocolo_de_atencion_técnica
                </span>
                <ul className="list-disc pl-4 text-xs space-y-1 text-neutral-650 dark:text-neutral-350">
                  {maintResult.recommendations.map(
                    (rec: string, index: number) => (
                      <li key={index}>{rec}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Mecanismo predictivo derivado de la tasa de fallas:{" "}
              {maintResult.errors} fallas en un lapso de {maintResult.minutes}{" "}
              minutos.
            </div>
          </div>
        )}

        {/* 5. ECOLOGICAL RESULTS */}
        {moduleId === "ecological" && ecoResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_05]
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-4 text-center">
                <span className="text-[8px] text-white uppercase font-bold block mb-1">
                  Destino del Activo
                </span>
                <span className="text-base font-bold text-neutral-800 dark:text-neutral-100 uppercase">
                  OPERACIÓN: {ecoResult.action}
                </span>
                <p className="text-xs text-neutral-500 dark:text-white mt-2 font-sans">
                  {ecoResult.explanation}
                </p>
              </div>

              <div className="space-y-1.5 text-xs">
                <p>
                  <span className="text-white uppercase text-[9px] font-bold">
                    Activo:
                  </span>{" "}
                  {ecoName} ({ecoAge} años)
                </p>
                <p>
                  <span className="text-white uppercase text-[9px] font-bold">
                    Canal de Recepción:
                  </span>{" "}
                  {ecoResult.targetHub}
                </p>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Clasificación efectuada de acuerdo con los marcos de reciclaje
              RAEE aplicables a la región.
            </div>
          </div>
        )}

        {/* 6. BANDWIDTH RESULTS */}
        {moduleId === "bandwidth" && bandResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_06]
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-4">
                <span className="text-[8px] text-white uppercase font-bold block mb-1">
                  Régimen QoS Aplicado
                </span>
                <span className="text-xs font-bold block">
                  {bandResult.isThrottled
                    ? "VELOCIDAD LIMITADA / AJUSTE REGULATORIO"
                    : "suministro_libre"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-300 dark:border-neutral-800 p-2 text-center">
                  <span className="text-[8px] text-white uppercase font-bold block">
                    Demanda Inicial
                  </span>
                  <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    {bandResult.requestedMbps} Mbps
                  </span>
                </div>
                <div className="border border-neutral-300 dark:border-neutral-800 p-2 text-center bg-gray-500 dark:bg-neutral-900">
                  <span className="text-[8px] text-white uppercase font-bold block">
                    Tasa Autorizada
                  </span>
                  <span className="text-sm font-bold text-[#5C6B73] dark:text-neutral-300">
                    {bandResult.allowedMbps} Mbps
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-neutral-500 leading-relaxed bg-neutral-100 dark:bg-neutral-900 p-3 border border-neutral-200">
                <strong className="text-white">Justificación técnica:</strong> {bandResult.explanation}
              </p>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Gráfica horaria de limitación municipal activa en el intervalo
              laborable habitual.
            </div>
          </div>
        )}

        {/* 7. BIOMETRIC PIN SYSTEM RESULTS */}
        {moduleId === "biometric_pin" && bioResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_07]
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-4 text-center">
                <span className="text-[8px] text-white uppercase font-bold block mb-1">
                  Estado de Autenticación
                </span>
                <span className="text-sm font-bold uppercase">
                  {bioResult.status}
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-350 mt-2 font-sans">
                  {bioResult.message}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] font-bold text-white uppercase block tracking-wider">
                  // terminales_bloqueadas_en_sesión
                </span>
                <div className="max-h-[85px] overflow-y-auto border border-neutral-300 dark:border-neutral-800 p-2 bg-gray-500 dark:bg-[#1C1C1E] font-mono text-[10px] space-y-1">
                  {blockedIps.map((ip, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-neutral-500 dark:text-white"
                    >
                      <span>{ip}</span>
                      <span className="text-[8px] uppercase tracking-wide font-bold px-1 hover:bg-blue-500 dark:bg-neutral-800">
                        RESTRINGIDO
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Control de bitácora y auditoría de consolas de automatización
              según norma ISO 27001.
            </div>
          </div>
        )}

        {/* 8. SMART ROUTING RESULTS */}
        {moduleId === "routing" && routeResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_08]
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-4">
                <span className="text-[8px] text-white uppercase font-bold block mb-1">
                  Enlace Seleccionado de Tránsito
                </span>
                <span className="text-xs font-bold block">
                  CARRIL DIRECTO: {routeResult.selectedRoute}
                </span>
                <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                  {routeResult.selectionReason}
                </p>
              </div>

              <div className="space-y-2 text-[11px]">
                <span className="text-[9px] text-white font-bold block uppercase tracking-wider">
                  // métricas_de_enlace
                </span>
                <div className="flex justify-between border-b pb-1 border-neutral-200 dark:border-neutral-800/60">
                  <span>
                    Ruta 1 (Fibra) : Latencia {routeResult.metrics?.r1?.lat}ms,
                    Costo ${routeResult.metrics?.r1?.cost}
                  </span>
                  <span>
                    {routeResult.metrics?.r1?.isPicked
                      ? "[SELECCIONADO]"
                      : "[---]"}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-1 border-neutral-200 dark:border-neutral-800/60">
                  <span>
                    Ruta 2 (Sat) : Latencia {routeResult.metrics?.r2?.lat}ms,
                    Costo ${routeResult.metrics?.r2?.cost}
                  </span>
                  <span>
                    {routeResult.metrics?.r2?.isPicked
                      ? "[SELECCIONADO]"
                      : "[---]"}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Algoritmo de balance de cargas por costo y desempeño en tiempo
              real.
            </div>
          </div>
        )}

        {/* 9. FLOOD ALERTS RESULTS */}
        {moduleId === "flood" && floodResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_09]
              </div>

              <div
                className={
                  floodResult.isAlertOn
                    ? "border border-neutral-400 p-3 hover:bg-blue-500 text-neutral-900"
                    : "border border-neutral-300 p-3"
                }
              >
                <span className="text-[8px] font-bold block uppercase text-neutral-500 mb-1">
                  Alerta Sensor de Inundación
                </span>
                <span className="text-sm font-extrabold uppercase">
                  {floodResult.isAlertOn
                    ? "ALERTA DE DESBORDE ACTIVA"
                    : "SITUACIÓN BAJO CONTROL"}
                </span>
                <p className="font-sans text-xs mt-1 leading-normal">
                  {floodResult.message}
                </p>
              </div>

              <div className="space-y-1 text-xs">
                <p>
                  <span className="text-white uppercase text-[9px] font-bold">
                    Variación Medida:
                  </span>{" "}
                  +{floodResult.delta} cm medidos
                </p>
                <p>
                  <span className="text-white uppercase text-[9px] font-bold">
                    Parámetro de Disparo:
                  </span>{" "}
                  Superior a 20 cm en menos de 10 minutos
                </p>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Evaluación automatizada en base a las lecturas directas del
              sensor fluvial vecinal.
            </div>
          </div>
        )}

        {/* 10. SOCIAL BILLING RESULTS */}
        {moduleId === "billing" && billResult && (
          <div className="space-y-6 flex-1 flex flex-col justify-between font-mono text-xs text-neutral-850 dark:text-neutral-200">
            <div className="space-y-4">
              <div className="border-b border-neutral-300 dark:border-neutral-800 pb-2 text-[10px] font-bold text-[#5C6B73] dark:text-[#8AA2AD] uppercase tracking-wide">
                [INFORMACIÓN_DE_REGISTRO_SIA_10]
              </div>

              <div className="border border-neutral-300 dark:border-neutral-800 p-4 text-center bg-gray-500 dark:bg-neutral-900">
                <span className="text-[8px] text-white uppercase font-bold block mb-1">
                  Total Liquidado Factura Social
                </span>
                <span className="text-base font-extrabold text-[#5C6B73] dark:text-neutral-200">
                  Total: $ {billResult.totalBill}.00 M.N.
                </span>
                <p className="text-[10px] text-white mt-2">
                  Contribuyente: {billResult.client} ({billResult.gbConsumed} GB
                  Consumidos)
                </p>
              </div>

              <div className="space-y-1.5 font-sans">
                <span className="text-[9px] font-mono font-bold text-white block uppercase tracking-wider">
                  // desglose_valores_facturación
                </span>
                <ul className="list-disc pl-4 text-xs space-y-1 text-neutral-650 dark:text-neutral-350">
                  {billResult.breakdown.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-[9px] text-white border-t border-neutral-250 dark:border-neutral-800 pt-2 font-sans">
              *Cálculo de Internet Comunitario conforme a las directrices de
              subsidio de espectro social.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
