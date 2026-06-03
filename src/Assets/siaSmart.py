# =============================================================
# SIA-SMART: Sistema Inteligente de Automatización Urbana
# Universidad Privada Domingo Savio (UPDS)
# Materia: Programación Básica
# Docente: Lic. Edmundo Rivas Vargas
# Estudiante: Bryan Maciel de Almeida
# =============================================================

siaSmart = True

if siaSmart:

    def render_cabecalho():
        print("\n" + "=" * 60)
        print("   SIA-SMART — Sistema Inteligente de Automatización Urbana")
        print("=" * 60)

    def render_menu():
        render_cabecalho()
        print("\n  Seleccione un módulo:\n")
        print("  [1]  Gestión Energética de Racks")
        print("  [2]  Filtro Ético de Contenido por Edad")
        print("  [3]  Optimización de Subredes")
        print("  [4]  Mantenimiento Predictivo de Red")
        print("  [5]  Clasificador Ecológico de Hardware")
        print("  [6]  Regulador de Ancho de Banda")
        print("  [7]  Sistema Biométrico con PIN")
        print("  [8]  Enrutamiento Inteligente")
        print("  [9]  Alerta Temprana de Inundaciones")
        print("  [10] Facturación Social de Internet")
        print("  [0]  Salir")
        print("\n" + "-" * 60)

    def render_resultado(titulo, resultado):
        print("\n" + "-" * 60)
        print(f"  RESULTADO — {titulo}")
        print("-" * 60)
        for clave, valor in resultado.items():
            print(f"  {clave:<20}: {valor}")
        print("-" * 60)

    def render_separador():
        print("\n" + "=" * 60)

    # -------------------------------------------------------------
    # FUNCIONES AUXILIARES DE INPUT
    # -------------------------------------------------------------

    def pedir_float(mensaje):
        while True:
            try:
                return float(input(f"  {mensaje}: "))
            except ValueError:
                print("  [!] Ingrese un número válido.")

    def pedir_int(mensaje):
        while True:
            try:
                return int(input(f"  {mensaje}: "))
            except ValueError:
                print("  [!] Ingrese un número entero válido.")

    def pedir_texto(mensaje):
        return input(f"  {mensaje}: ").strip()

    # -------------------------------------------------------------
    # MÓDULO 1: Gestión Energética de Racks
    # -------------------------------------------------------------

    def gestionar_energia_datacenter(rack_a, rack_b, rack_c):
        consumo_total = rack_a + rack_b + rack_c
        estado = {"Rack_A": "ON", "Rack_B": "ON", "Rack_C": "ON"}
        accion = "Sin cambios - consumo dentro del limite"

        if consumo_total > 5000:
            consumos = {"Rack_A": rack_a, "Rack_B": rack_b, "Rack_C": rack_c}
            rack_apagar = max(consumos, key=consumos.get)
            estado[rack_apagar] = "OFF"
            consumo_total -= consumos[rack_apagar]
            accion = f"ALERTA: {rack_apagar} apagado por exceso de consumo"

        return {
            "Rack A": f"{rack_a} W — {estado['Rack_A']}",
            "Rack B": f"{rack_b} W — {estado['Rack_B']}",
            "Rack C": f"{rack_c} W — {estado['Rack_C']}",
            "Consumo total": f"{consumo_total} W",
            "Accion": accion,
        }

    def menu_modulo1():
        print("\n  >> Gestión Energética de Racks\n")
        rack_a = pedir_float("Consumo Rack A (W)")
        rack_b = pedir_float("Consumo Rack B (W)")
        rack_c = pedir_float("Consumo Rack C (W)")
        resultado = gestionar_energia_datacenter(rack_a, rack_b, rack_c)
        render_resultado("Gestión Energética de Racks", resultado)

    # -------------------------------------------------------------
    # MÓDULO 2: Filtro Ético de Contenido por Edad
    # -------------------------------------------------------------

    def validar_acceso_web(edad, dominio):
        if edad <= 0 or edad > 120:
            return {"acceso": "ERROR", "mensaje": "Edad invalida"}

        dominio = dominio.lower().strip()

        if edad < 18:
            if dominio == ".edu":
                return {
                    "acceso": "PERMITIDO",
                    "mensaje": "Menor de edad — dominio educativo (.edu)",
                }
            else:
                return {
                    "acceso": "DENEGADO",
                    "mensaje": "Menores solo pueden acceder a dominios .edu",
                }

        return {
            "acceso": "PERMITIDO",
            "mensaje": "Usuario mayor de edad — acceso libre",
        }

    def menu_modulo2():
        print("\n  >> Filtro Ético de Contenido por Edad\n")
        edad = pedir_int("Edad del usuario")
        dominio = pedir_texto("Dominio del sitio (ej: .edu  .com  .org)")
        resultado = validar_acceso_web(edad, dominio)
        render_resultado("Filtro Ético por Edad", resultado)

    # -------------------------------------------------------------
    # MÓDULO 3: Optimización de Subredes
    # -------------------------------------------------------------

    def seleccionar_subred(cantidad_hosts):
        subredes = [
            {"prefijo": "/30", "utilizables": 2},
            {"prefijo": "/29", "utilizables": 6},
            {"prefijo": "/28", "utilizables": 14},
            {"prefijo": "/27", "utilizables": 30},
            {"prefijo": "/26", "utilizables": 62},
            {"prefijo": "/25", "utilizables": 126},
            {"prefijo": "/24", "utilizables": 254},
            {"prefijo": "/23", "utilizables": 510},
        ]

        for subred in subredes:
            if cantidad_hosts <= subred["utilizables"]:
                desperdicio = subred["utilizables"] - cantidad_hosts
                return {
                    "Hosts requeridos": cantidad_hosts,
                    "Subred recomendada": subred["prefijo"],
                    "IPs utilizables": subred["utilizables"],
                    "IPs desperdiciadas": desperdicio,
                    "Eficiencia": f"{round((cantidad_hosts / subred['utilizables']) * 100, 1)}%",
                }

        return {
            "Hosts requeridos": cantidad_hosts,
            "Resultado": "Ninguna subred disponible cubre esta demanda",
        }

    def menu_modulo3():
        print("\n  >> Optimización de Subredes Rurales\n")
        hosts = pedir_int("Cantidad de hosts requeridos")
        resultado = seleccionar_subred(hosts)
        render_resultado("Optimización de Subredes", resultado)

    # -------------------------------------------------------------
    # MÓDULO 4: Mantenimiento Predictivo
    # -------------------------------------------------------------

    def calcular_severidad(errores):
        if errores > 30:
            return "CRITICA"
        elif errores > 20:
            return "ALTA"
        return "MEDIA"

    def monitorear_errores_trama(errores, minutos):
        if errores < 0 or minutos <= 0:
            return {"Estado": "ERROR", "Mensaje": "Parametros invalidos"}

        tasa = round(errores / minutos, 2)

        if errores > 10 and minutos <= 5:
            severidad = calcular_severidad(errores)
            return {
                "Estado": f"ALERTA {severidad}",
                "Errores": errores,
                "Tiempo (min)": minutos,
                "Tasa /min": tasa,
                "Severidad": severidad,
                "Accion": "Revisar enlace de red de inmediato",
            }

        return {
            "Estado": "NORMAL",
            "Errores": errores,
            "Tiempo (min)": minutos,
            "Tasa /min": tasa,
            "Accion": "Sin intervención requerida",
        }

    def menu_modulo4():
        print("\n  >> Mantenimiento Predictivo de Red\n")
        errores = pedir_int("Número de errores de trama detectados")
        minutos = pedir_float("Ventana de tiempo (minutos)")
        resultado = monitorear_errores_trama(errores, minutos)
        render_resultado("Mantenimiento Predictivo", resultado)

    # -------------------------------------------------------------
    # MÓDULO 5: Clasificador Ecológico de Hardware
    # -------------------------------------------------------------

    def obtener_categoria_ecologica(anos):
        if anos > 8:
            return (
                "RECICLAJE",
                "Obsoleto",
                "Enviar a punto limpio o empresa certificada RAEE",
            )
        elif anos >= 3 and anos <= 8:
            return (
                "DONACION",
                "Funcional",
                "Donar a escuelas o fundaciones sin fines de lucro",
            )
        else:
            return (
                "REVENTA",
                "Vigente",
                "Publicar en mercado secundario o reacondicionado",
            )

    def clasificar_equipo(nombre_equipo, antiguedad_anos):
        if antiguedad_anos < 0:
            return {"Error": "La antiguedad no puede ser negativa"}

        destino, categoria, recomendacion = obtener_categoria_ecologica(antiguedad_anos)

        return {
            "Equipo": nombre_equipo,
            "Antiguedad": f"{antiguedad_anos} años",
            "Categoria": categoria,
            "Destino": destino,
            "Recomendacion": recomendacion,
        }

    def menu_modulo5():
        print("\n  >> Clasificador Ecológico de Hardware\n")
        nombre = pedir_texto("Nombre o ID del equipo")
        anos = pedir_int("Antigüedad del equipo (años)")
        resultado = clasificar_equipo(nombre, anos)
        render_resultado("Clasificador Ecológico", resultado)

    # -------------------------------------------------------------
    # MÓDULO 6: Regulador de Ancho de Banda
    # -------------------------------------------------------------

    def aplicar_limite_qos(velocidad, limite):
        return min(velocidad, limite)

    def gestionar_ancho_banda(hora_actual, velocidad_solicitada):
        LIMITE = 10
        H_INI = 8
        H_FIN = 18

        if not (0 <= hora_actual <= 23):
            return {"Error": "Hora invalida — ingrese un valor entre 0 y 23"}

        en_horario = H_INI <= hora_actual < H_FIN

        if en_horario:
            asignada = aplicar_limite_qos(velocidad_solicitada, LIMITE)
            return {
                "Hora": f"{hora_actual}:00",
                "Horario": "Laboral (08:00 - 18:00)",
                "Velocidad solicitada": f"{velocidad_solicitada} Mbps",
                "Velocidad asignada": f"{asignada} Mbps",
                "Estado": "LIMITADO",
            }

        return {
            "Hora": f"{hora_actual}:00",
            "Horario": "Fuera de horario laboral",
            "Velocidad solicitada": f"{velocidad_solicitada} Mbps",
            "Velocidad asignada": f"{velocidad_solicitada} Mbps",
            "Estado": "ILIMITADO",
        }

    def menu_modulo6():
        print("\n  >> Regulador de Ancho de Banda (QoS)\n")
        hora = pedir_int("Hora actual (0-23)")
        velocidad = pedir_float("Velocidad solicitada (Mbps)")
        resultado = gestionar_ancho_banda(hora, velocidad)
        render_resultado("Regulador de Ancho de Banda", resultado)

    # -------------------------------------------------------------
    # MÓDULO 7: Sistema Biométrico con PIN
    # -------------------------------------------------------------

    def verificar_pin(pin_ingresado, pin_correcto):
        if len(pin_correcto) != 4 or not pin_correcto.isdigit():
            return "formato_invalido"
        if pin_ingresado == pin_correcto:
            return "correcto"
        return "incorrecto"

    def validar_pin(pin_ingresado, pin_correcto, intentos_previos, ip_usuario):
        MAX = 3

        if intentos_previos >= MAX:
            return {
                "Acceso": "DENEGADO",
                "IP": ip_usuario,
                "Estado IP": "BLOQUEADA",
                "Intentos restantes": 0,
                "Mensaje": "IP bloqueada por exceso de intentos fallidos",
            }

        resultado_pin = verificar_pin(pin_ingresado, pin_correcto)

        if resultado_pin == "formato_invalido":
            return {
                "Acceso": "DENEGADO",
                "IP": ip_usuario,
                "Estado IP": "ACTIVA",
                "Intentos restantes": MAX - intentos_previos,
                "Mensaje": "El PIN debe tener exactamente 4 digitos numericos",
            }

        if resultado_pin == "correcto":
            return {
                "Acceso": "CONCEDIDO",
                "IP": ip_usuario,
                "Estado IP": "ACTIVA",
                "Intentos restantes": MAX,
                "Mensaje": "Autenticacion exitosa",
            }

        nuevos_intentos = intentos_previos + 1
        restantes = MAX - nuevos_intentos
        bloqueada = nuevos_intentos >= MAX

        return {
            "Acceso": "DENEGADO",
            "IP": ip_usuario,
            "Estado IP": "BLOQUEADA" if bloqueada else "ACTIVA",
            "Intentos restantes": restantes,
            "Mensaje": "PIN incorrecto" + (" — IP bloqueada" if bloqueada else ""),
        }

    def menu_modulo7():
        print("\n  >> Sistema Biométrico con PIN\n")
        ip = pedir_texto("Dirección IP del usuario")
        pin_correcto = pedir_texto("PIN correcto del sistema (4 dígitos)")
        intentos = pedir_int("Intentos fallidos previos (0, 1 o 2)")
        pin_ingresado = pedir_texto("PIN ingresado por el usuario")
        resultado = validar_pin(pin_ingresado, pin_correcto, intentos, ip)
        render_resultado("Sistema Biométrico PIN", resultado)

    # -------------------------------------------------------------
    # MÓDULO 8: Enrutamiento Inteligente
    # -------------------------------------------------------------

    def seleccionar_ruta(latencia_a, costo_a, latencia_b, costo_b):

        PESO_LATENCIA = 3
        PESO_COSTO = 1

        score_a = (latencia_a * PESO_LATENCIA) + (costo_a * PESO_COSTO)
        score_b = (latencia_b * PESO_LATENCIA) + (costo_b * PESO_COSTO)

        if score_a <= score_b:

            return {
                "Ruta seleccionada": "Ruta_A",
                "Latencia": f"{latencia_a} ms",
                "Costo": f"${costo_a} USD",
                "Score": round(score_a, 2),
                "Criterio": "Mejor equilibrio entre costo y rendimiento",
                "Ruta descartada": f"Ruta_B ({latencia_b}ms / ${costo_b})",
            }

        return {
            "Ruta seleccionada": "Ruta_B",
            "Latencia": f"{latencia_b} ms",
            "Costo": f"${costo_b} USD",
            "Score": round(score_b, 2),
            "Criterio": "Mejor equilibrio entre costo y rendimiento",
            "Ruta descartada": f"Ruta_A ({latencia_a}ms / ${costo_a})",
        }

    def menu_modulo8():

        print("\n >> Enrutamiento Inteligente\n")

        lat_a = pedir_float("Latencia Ruta A (ms)")
        cost_a = pedir_float("Costo Ruta A (USD)")

        lat_b = pedir_float("Latencia Ruta B (ms)")
        cost_b = pedir_float("Costo Ruta B (USD)")

        resultado = seleccionar_ruta(lat_a, cost_a, lat_b, cost_b)

        render_resultado("Enrutamiento Inteligente", resultado)

    # -------------------------------------------------------------
    # MÓDULO 9: Alerta Temprana de Inundaciones
    # -------------------------------------------------------------

    def clasificar_riesgo(variacion):
        if variacion > 50:
            return "CATASTROFICO"
        elif variacion > 35:
            return "GRAVE"
        return "MODERADO"

    def procesar_sensor_agua(nivel_inicial, nivel_actual, tiempo_min):
        if tiempo_min <= 0:
            return {"Error": "El tiempo debe ser mayor a 0"}

        variacion = nivel_actual - nivel_inicial
        tasa = round(variacion / tiempo_min, 2)

        if variacion > 20 and tiempo_min < 10:
            riesgo = clasificar_riesgo(variacion)
            return {
                "Estado": f"ALARMA ACTIVA — {riesgo}",
                "Nivel inicial": f"{nivel_inicial} cm",
                "Nivel actual": f"{nivel_actual} cm",
                "Variacion": f"+{variacion} cm",
                "Tasa subida": f"{tasa} cm/min",
                "Accion": "Activar protocolo de evacuacion",
            }

        return {
            "Estado": "NORMAL",
            "Nivel inicial": f"{nivel_inicial} cm",
            "Nivel actual": f"{nivel_actual} cm",
            "Variacion": f"{variacion} cm",
            "Tasa subida": f"{tasa} cm/min",
            "Accion": "Sin riesgo detectado",
        }

    def menu_modulo9():
        print("\n  >> Alerta Temprana de Inundaciones\n")
        inicial = pedir_float("Nivel inicial del agua (cm)")
        actual = pedir_float("Nivel actual del agua (cm)")
        tiempo = pedir_float("Tiempo transcurrido (minutos)")
        resultado = procesar_sensor_agua(inicial, actual, tiempo)
        render_resultado("Alerta de Inundaciones", resultado)

    # -------------------------------------------------------------
    # MÓDULO 10: Facturación Social de Internet
    # -------------------------------------------------------------

    def calcular_cargo_tramo2(gb):
        if gb > 50:
            return min(gb - 50, 50) * 1.0
        return 0.0

    def calcular_cargo_tramo3(gb):
        if gb > 100:
            return (gb - 100) * 2.0
        return 0.0

    def calcular_factura_internet(nombre_cliente, gb_consumidos):
        if gb_consumidos < 0:
            return {"Error": "El consumo no puede ser negativo"}

        tramo2 = calcular_cargo_tramo2(gb_consumidos)
        tramo3 = calcular_cargo_tramo3(gb_consumidos)
        total = round(tramo2 + tramo3, 2)

        return {
            "Cliente": nombre_cliente,
            "GB consumidos": gb_consumidos,
            "0 - 50 GB": "$0.00  (gratis)",
            "51 - 100 GB": f"${tramo2:.2f}",
            "Mas de 100 GB": f"${tramo3:.2f}",
            "TOTAL A PAGAR": f"${total:.2f} USD",
        }

    def menu_modulo10():
        print("\n  >> Facturación Social de Internet\n")
        nombre = pedir_texto("Nombre del cliente")
        gb = pedir_float("GB consumidos en el período")
        resultado = calcular_factura_internet(nombre, gb)
        render_resultado("Facturación Social", resultado)

    # -------------------------------------------------------------
    # ROTEADOR — conecta menu com módulos
    # -------------------------------------------------------------

    def roteador(opcion):
        rotas = {
            "1": menu_modulo1,
            "2": menu_modulo2,
            "3": menu_modulo3,
            "4": menu_modulo4,
            "5": menu_modulo5,
            "6": menu_modulo6,
            "7": menu_modulo7,
            "8": menu_modulo8,
            "9": menu_modulo9,
            "10": menu_modulo10,
        }

        if opcion in rotas:
            rotas[opcion]()
        else:
            print("\n  [!] Opción no válida. Intente nuevamente.")

    # -------------------------------------------------------------
    # PROGRAMA PRINCIPAL
    # -------------------------------------------------------------

    def main():
        while True:
            render_menu()
            opcion = input("  Ingrese su opción: ").strip()

            if opcion == "0":
                render_separador()
                print("  Hasta luego. — SIA-SMART")
                render_separador()
                break

            roteador(opcion)

            input("\n  Presione ENTER para volver al menú...")

    if __name__ == "__main__":
        main()
else:
    print("SIA-SMART no funciona")
