Idiomas

<a href="./README.md">
    <img src="https://flagcdn.com/w20/us.png" width="20">
    English
  </a>
  
  <a href="./README.pt-BR.md">
    <img src="https://flagcdn.com/w20/br.png" width="20">
    Português
  </a>
  
  <a href="./README.es.md">
    <img src="https://flagcdn.com/w20/es.png" width="20">
    Español
  </a>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1a1a2e,100:16213e&height=200&section=header&text=SIA-Smart&fontSize=72&fontColor=00d4ff&fontAlignY=38&desc=Sistema%20Inteligente%20de%20Automatización%20Urbana&descAlignY=60&descSize=20&descColor=c9d1d9" width="100%"/>

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Completado-00C853?style=for-the-badge&logo=checkmarx&logoColor=white)
![Licencia](https://img.shields.io/badge/Licencia-Académico-blueviolet?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

![Módulos](https://img.shields.io/badge/Módulos-10-ff6b35?style=for-the-badge&logo=databricks&logoColor=white)
![ODS 4](https://img.shields.io/badge/ODS%204-Educación%20de%20Calidad-c21807?style=for-the-badge&logo=bookstack&logoColor=white)
![ODS 9](https://img.shields.io/badge/ODS%209-Innovación%20e%20Infraestructura-fd6a02?style=for-the-badge&logo=blueprint&logoColor=white)

<br/>

> **SIA-Smart** es un sistema modular en Python que resuelve **10 problemas reales de ingeniería urbana**, cubriendo automatización, redes, ciberseguridad, sostenibilidad y gestión de infraestructura inteligente.

<br/>

[![Programa](https://img.shields.io/badge/Ingeniería%20de%20Sistemas-Universidad-1a1a2e?style=flat-square&logo=academia&logoColor=white)](.)
[![Materia](https://img.shields.io/badge/Programación%20Básica-Materia-16213e?style=flat-square&logo=codecademy&logoColor=white)](.)
[![Ciudad](https://img.shields.io/badge/Santa%20Cruz%20de%20la%20Sierra-Bolivia-009B3A?style=flat-square&logo=googlemaps&logoColor=white)](.)

</div>

---

## Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Módulos del Sistema](#módulos-del-sistema)
- [Funcionalidades](#funcionalidades)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Modularidad en Python](#modularidad-en-python)
- [Uso de Funciones (`def`)](#uso-de-funciones-def)
- [Alineación con los ODS](#alineación-con-los-ods)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Notas Académicas](#notas-académicas)
- [Conclusión](#conclusión)
- [Autor](#autor)

---

## Sobre el Proyecto

**SIA-Smart** (_Sistema Inteligente de Automatización Urbana_) es un proyecto académico desarrollado para la materia de **Programación Básica** de la carrera de **Ingeniería de Sistemas**. El sistema aborda desafíos reales de la ingeniería moderna mediante **programación modular en Python**, organizando cada solución como un módulo independiente y reutilizable.

La propuesta integra conceptos de:

- Automatización urbana y control de tráfico
- Redes y optimización de subredes
- Ciberseguridad y validación de accesos
- Sostenibilidad y clasificación ecológica
- Gestión energética y sensores inteligentes
- Sistemas de alerta y prevención de desastres

---

## Módulos del Sistema

El sistema está compuesto por **10 módulos independientes**, cada uno resolviendo un problema específico de ingeniería:

| #    | Módulo                                  | Área                 | Descripción                                                                |
| ---- | --------------------------------------- | -------------------- | -------------------------------------------------------------------------- |
| `01` | **Gestión de Racks en Data Center**     | Infraestructura      | Gestiona la asignación y ocupación de racks físicos en centros de datos    |
| `02` | **Filtro de Contenido por Edad**        | Seguridad Digital    | Restringe el acceso a contenidos según la franja etaria del usuario        |
| `03` | **Optimización de Subredes**            | Redes                | Calcula y optimiza el direccionamiento de subredes para máxima eficiencia  |
| `04` | **Mantenimiento Predictivo**            | Automatización       | Analiza datos de sensores para predecir fallas en equipos urbanos          |
| `05` | **Clasificación Ecológica de Hardware** | Sostenibilidad       | Clasifica componentes electrónicos conforme a criterios ambientales        |
| `06` | **Gestión de Ancho de Banda**           | Redes                | Controla y distribuye el ancho de banda entre usuarios y servicios         |
| `07` | **Validación de PIN y Bloqueo de IP**   | Ciberseguridad       | Valida PINs y bloquea direcciones IP tras intentos fallidos                |
| `08` | **Enrutamiento Inteligente**            | Tráfico Urbano       | Determina las mejores rutas en redes urbanas basándose en métricas         |
| `09` | **Alerta de Inundación**                | Sensores / Seguridad | Procesa datos de sensores para emitir alertas de inundación en tiempo real |
| `10` | **Facturación Social de Internet**      | Gestión Energética   | Calcula tarifas de internet con criterios sociales y de consumo justo      |

---

## Funcionalidades

```
- Sistema completamente modular — cada módulo funciona de forma independiente
- Menú interactivo en terminal para navegar entre los módulos
- Validación de entradas con manejo de errores en todos los módulos
- Funciones reutilizables con parámetros y retornos bien definidos
- Código limpio, comentado y siguiendo buenas prácticas de Python
- Alineación con los Objetivos de Desarrollo Sostenible (ODS)
- Simulación de escenarios reales de ingeniería urbana
```

---

## Estructura del Proyecto

```
SIA-Smart/
|
+-- main.py                                   # Punto de entrada principal del sistema
+-- README.md                                 # Documentación del proyecto
|
+-- modulos/                                  # Directorio con todos los módulos
|   +-- __init__.py
|   +-- 01_gestion_racks.py                   # Gestión de racks en Data Center
|   +-- 02_filtro_contenido.py                # Filtro de contenido por edad
|   +-- 03_optimizacion_subredes.py           # Optimización de subredes
|   +-- 04_mantenimiento_predictivo.py        # Mantenimiento predictivo
|   +-- 05_clasificacion_ecologica.py         # Clasificación ecológica de hardware
|   +-- 06_gestion_ancho_banda.py             # Gestión de ancho de banda
|   +-- 07_validacion_pin_ip.py               # Validación de PIN y bloqueo de IP
|   +-- 08_enrutamiento_inteligente.py        # Enrutamiento inteligente
|   +-- 09_alerta_inundacion.py               # Alerta de inundación
|   +-- 10_facturacion_social.py              # Facturación social de internet
|
+-- docs/                                     # Documentación adicional
    +-- informe_tecnico.pdf
```

---

## Modularidad en Python

La **programación modular** es un paradigma que consiste en dividir un programa en partes más pequeñas, independientes y reutilizables llamadas **módulos**. En SIA-Smart, cada problema de ingeniería fue encapsulado en su propio archivo `.py`, lo que aporta múltiples ventajas:

```
Organización    ->  Código separado por responsabilidad
Reutilización   ->  Las funciones pueden ser llamadas por otros módulos
Mantenimiento   ->  Los errores quedan aislados en módulos específicos
Verificación    ->  Cada módulo puede probarse de forma independiente
Colaboración    ->  Facilita el trabajo en equipo
```

**Cómo se importan los módulos en `main.py`:**

```python
# main.py
from modulos import gestion_racks
from modulos import filtro_contenido
from modulos import optimizacion_subredes
# ... demás módulos

def menu_principal():
    print("=" * 50)
    print("   SIA-Smart -- Sistema Inteligente Urbano")
    print("=" * 50)
    print("[1] Gestión de Racks en Data Center")
    print("[2] Filtro de Contenido por Edad")
    print("[3] Optimización de Subredes")
    # ...
```

---

## Uso de Funciones (`def`)

Las **funciones** (`def`) son el núcleo del proyecto. Cada módulo define funciones con un propósito único, recibiendo parámetros y devolviendo resultados procesados.

### Ejemplo -- Módulo 07: Validación de PIN y Bloqueo de IP

```python
# modulos/07_validacion_pin_ip.py

INTENTOS_MAXIMOS = 3
ips_bloqueadas = []

def validar_pin(pin_ingresado: str, pin_correcto: str) -> bool:
    """
    Valida si el PIN ingresado coincide con el correcto.

    Args:
        pin_ingresado (str): PIN que el usuario ingresó.
        pin_correcto  (str): PIN almacenado en el sistema.

    Returns:
        bool: True si el PIN es válido, False en caso contrario.
    """
    return pin_ingresado == pin_correcto


def bloquear_ip(ip: str) -> None:
    """Agrega una IP a la lista de bloqueadas."""
    if ip not in ips_bloqueadas:
        ips_bloqueadas.append(ip)
        print(f"[SEGURIDAD] IP {ip} bloqueada por exceder intentos.")


def autenticar_usuario(ip: str, pin_correcto: str) -> bool:
    """
    Gestiona el proceso de autenticación con control de intentos.

    Returns:
        bool: True si la autenticación fue exitosa.
    """
    if ip in ips_bloqueadas:
        print(f"[ERROR] Acceso denegado. IP {ip} está bloqueada.")
        return False

    intentos = 0
    while intentos < INTENTOS_MAXIMOS:
        pin = input("Ingrese su PIN: ")
        if validar_pin(pin, pin_correcto):
            print("[OK] Autenticación exitosa.")
            return True
        intentos += 1
        print(f"[AVISO] PIN incorrecto. Intentos restantes: {INTENTOS_MAXIMOS - intentos}")

    bloquear_ip(ip)
    return False
```

### Ejemplo -- Módulo 09: Alerta de Inundación

```python
# modulos/09_alerta_inundacion.py

NIVEL_ALERTA   = 70   # cm -- nivel de precaución
NIVEL_CRITICO  = 120  # cm -- nivel de evacuación

def leer_sensor(sensor_id: int) -> float:
    """Simula la lectura de un sensor de nivel de agua."""
    lecturas = {1: 45.0, 2: 85.5, 3: 130.2, 4: 20.0}
    return lecturas.get(sensor_id, 0.0)


def clasificar_nivel(nivel_cm: float) -> str:
    """Clasifica el nivel de agua y retorna el estado de alerta."""
    if nivel_cm >= NIVEL_CRITICO:
        return "[CRITICO] Evacuar zona inmediatamente"
    elif nivel_cm >= NIVEL_ALERTA:
        return "[ALERTA]  Monitoreo intensivo activado"
    else:
        return "[NORMAL]  Sin riesgo detectado"


def emitir_alerta(sensor_id: int) -> None:
    """Coordina la lectura del sensor y la emisión de la alerta."""
    nivel = leer_sensor(sensor_id)
    estado = clasificar_nivel(nivel)
    print(f"Sensor #{sensor_id} | Nivel: {nivel:.1f} cm | Estado: {estado}")
```

---

## Alineación con los ODS

SIA-Smart fue desarrollado con conciencia social y ambiental, alineándose con dos **Objetivos de Desarrollo Sostenible** de la ONU:

<table>
<tr>
<td width="50%" align="center">

### ODS 4

**Educación de Calidad**

El proyecto demuestra cómo la programación puede enseñarse a través de **problemas reales y relevantes**, haciendo el aprendizaje más significativo y conectado con los desafíos de la sociedad. Cada módulo funciona como un caso de estudio que puede adaptarse y ampliarse con fines educativos.

</td>
<td width="50%" align="center">

### ODS 9

**Industria, Innovación e Infraestructura**

Los módulos abordan directamente temas como **gestión de centros de datos**, **optimización de redes**, **enrutamiento inteligente** y **sensores urbanos** — pilares de la infraestructura tecnológica moderna y de la innovación industrial sostenible.

</td>
</tr>
</table>

---

## Instalación

### Requisitos Previos

| Requisito | Versión mínima | Descarga                                               |
| --------- | -------------- | ------------------------------------------------------ |
| Python    | 3.8+           | [python.org](https://python.org)                       |
| VS Code   | Cualquiera     | [code.visualstudio.com](https://code.visualstudio.com) |

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/SIA-Smart.git

# 2. Acceder al directorio del proyecto
cd SIA-Smart

# 3. (Opcional) Crear un entorno virtual
python -m venv venv
source venv/bin/activate        # Linux/macOS
venv\Scripts\activate           # Windows

# 4. Instalar dependencias (si las hay)
pip install -r requirements.txt
```

> **Nota:** El proyecto utiliza únicamente la **biblioteca estándar de Python**, por lo que no se requiere ninguna instalación adicional en la configuración básica.

---

## Ejecución

### Ejecutar el menú principal

```bash
python main.py
```

### Ejecutar un módulo específico directamente

```bash
python modulos/07_validacion_pin_ip.py
python modulos/09_alerta_inundacion.py
```

### Salida esperada del menú principal

```
==================================================
   SIA-Smart -- Sistema Inteligente Urbano
   Programación Básica | Ing. de Sistemas
==================================================

 [1]  Gestión de Racks en Data Center
 [2]  Filtro de Contenido por Edad
 [3]  Optimización de Subredes
 [4]  Mantenimiento Predictivo
 [5]  Clasificación Ecológica de Hardware
 [6]  Gestión de Ancho de Banda
 [7]  Validación de PIN y Bloqueo de IP
 [8]  Enrutamiento Inteligente
 [9]  Alerta de Inundación
 [10] Facturación Social de Internet
 [0]  Salir

Seleccione una opción: _
```

---

## Ejemplos de Uso

### Módulo 03 -- Optimización de Subredes

```
Ingrese la dirección de red base: 192.168.1.0
Ingrese la máscara CIDR (ej: 24): 26
Número de hosts requeridos: 50

> Subred:            192.168.1.0/26
> Máscara:           255.255.255.192
> Hosts disponibles: 62
> Broadcast:         192.168.1.63
[OK] La subred soporta los 50 hosts requeridos.
```

### Módulo 05 -- Clasificación Ecológica de Hardware

```
Ingrese el tipo de componente: procesador
Ingrese el año de fabricación: 2015
Ingrese el consumo energético (W): 95

> Componente:           PROCESADOR
> Antigüedad:           9 años
> Consumo:              95 W
> Clasificación:        MODERADO
> Recomendación: Considere reemplazar para mayor eficiencia energética.
```

### Módulo 10 -- Facturación Social de Internet

```
Ingrese el consumo mensual (GB): 120
Ingrese el tipo de usuario [residencial/comercial/social]: social

> Consumo:             120 GB
> Tarifa base:         $0.08/GB
> Descuento social:    40%
> Total a pagar:       $5.76
[OK] Factura generada correctamente.
```

---

## Notas Académicas

> **AVISO ACADÉMICO**
>
> Este proyecto fue desarrollado exclusivamente con fines **educativos** en el marco de la materia **Programación Básica** de la carrera de **Ingeniería de Sistemas**.
>
> - Los datos utilizados en los módulos son **simulados** y no representan infraestructuras reales.
> - Los algoritmos fueron implementados con **objetivos didácticos**, priorizando la legibilidad y la claridad sobre la optimización máxima del rendimiento.
> - El proyecto demuestra los conceptos fundamentales de **funciones (`def`)**, **modularidad**, **estructuras de control** y **buenas prácticas** en Python.

| Campo           | Detalle                            |
| --------------- | ---------------------------------- |
| **Institución** | Facultad de Ingeniería de Sistemas |
| **Materia**     | Programación Básica                |
| **Docente**     | Edmundo Rivas Vargas               |
| **Autor**       | Bryan Maciel de Almeida            |
| **Periodo**     | Junio 2026                         |
| **Ciudad**      | Santa Cruz de la Sierra, Bolivia   |

---

## Conclusión

**SIA-Smart** demuestra cómo la **programación modular en Python** puede aplicarse para resolver problemas reales y complejos de ingeniería urbana de manera organizada, escalable y sostenible.

Cada módulo representa una solución encapsulada para un desafío específico, y la integración de todos ellos en un único sistema ilustra el poder de la **arquitectura modular** en el desarrollo de software profesional.

Este proyecto refuerza que la programación va más allá de la sintaxis: es una herramienta poderosa para construir soluciones que impactan positivamente a la sociedad, alineadas con los **Objetivos de Desarrollo Sostenible** y con la visión de una ingeniería más humana y responsable.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213e,50:1a1a2e,100:0D1117&height=120&section=footer" width="100%"/>

**SIA-Smart** · Programación Básica · Ingeniería de Sistemas

Desarrollado por **Bryan Maciel de Almeida** · Santa Cruz de la Sierra · 2026

![](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![](https://img.shields.io/badge/Ingeniería-00d4ff?style=flat-square)
![](https://img.shields.io/badge/ODS-00C853?style=flat-square)

</div>
