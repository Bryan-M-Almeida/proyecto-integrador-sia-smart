Languages

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

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1a1a2e,100:16213e&height=200&section=header&text=SIA-Smart&fontSize=72&fontColor=00d4ff&fontAlignY=38&desc=Intelligent%20Urban%20Automation%20System&descAlignY=60&descSize=20&descColor=c9d1d9" width="100%"/>

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-00C853?style=for-the-badge&logo=checkmarx&logoColor=white)
![License](https://img.shields.io/badge/License-Academic-blueviolet?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

![Modules](https://img.shields.io/badge/Modules-10-ff6b35?style=for-the-badge&logo=databricks&logoColor=white)
![SDG 4](https://img.shields.io/badge/SDG%204-Quality%20Education-c21807?style=for-the-badge&logo=bookstack&logoColor=white)
![SDG 9](https://img.shields.io/badge/SDG%209-Innovation%20and%20Infrastructure-fd6a02?style=for-the-badge&logo=blueprint&logoColor=white)

<br/>

> **SIA-Smart** is a modular Python system that solves **10 real urban engineering problems**, covering automation, networking, cybersecurity, sustainability, and intelligent infrastructure management.

<br/>

[![Program](https://img.shields.io/badge/Systems%20Engineering-University-1a1a2e?style=flat-square&logo=academia&logoColor=white)](.)
[![Course](https://img.shields.io/badge/Basic%20Programming-Course-16213e?style=flat-square&logo=codecademy&logoColor=white)](.)
[![Location](https://img.shields.io/badge/Santa%20Cruz%20de%20la%20Sierra-Bolivia-009B3A?style=flat-square&logo=googlemaps&logoColor=white)](.)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [System Modules](#system-modules)
- [Features](#features)
- [Project Structure](#project-structure)
- [Modularity in Python](#modularity-in-python)
- [Use of Functions (`def`)](#use-of-functions-def)
- [Alignment with the SDGs](#alignment-with-the-sdgs)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage Examples](#usage-examples)
- [Academic Notes](#academic-notes)
- [Conclusion](#conclusion)
- [Author](#author)

---

## About the Project

**SIA-Smart** (_Sistema Inteligente de Automatización Urbana_) is an academic project developed for the **Basic Programming** course in the **Systems Engineering** program. The system addresses real modern engineering challenges through **modular Python programming**, organizing each solution as an independent and reusable module.

The project integrates concepts from:

- Urban automation and traffic control
- Networking and subnet optimization
- Cybersecurity and access validation
- Sustainability and ecological classification
- Energy management and smart sensors
- Alert systems and disaster prevention

---

## System Modules

The system consists of **10 independent modules**, each solving a specific engineering problem:

| #    | Module                                 | Area              | Description                                                          |
| ---- | -------------------------------------- | ----------------- | -------------------------------------------------------------------- |
| `01` | **Rack Management in Data Center**     | Infrastructure    | Manages physical rack allocation and occupancy in data centers       |
| `02` | **Age-Based Content Filter**           | Digital Security  | Restricts access to content based on the user's age group            |
| `03` | **Subnet Optimization**                | Networking        | Calculates and optimizes subnet addressing for maximum efficiency    |
| `04` | **Predictive Maintenance**             | Automation        | Analyzes sensor data to predict failures in urban equipment          |
| `05` | **Ecological Hardware Classification** | Sustainability    | Classifies electronic components according to environmental criteria |
| `06` | **Bandwidth Management**               | Networking        | Controls and distributes bandwidth among users and services          |
| `07` | **PIN Validation and IP Blocking**     | Cybersecurity     | Validates PINs and blocks IP addresses after failed attempts         |
| `08` | **Intelligent Routing**                | Urban Traffic     | Determines the best routes in urban networks based on metrics        |
| `09` | **Flood Alert**                        | Sensors / Safety  | Processes sensor data to issue real-time flood alerts                |
| `10` | **Social Internet Billing**            | Energy Management | Calculates internet tariffs with social and fair-use criteria        |

---

## Features
```
- Fully modular system — each module works independently
- Interactive terminal menu for navigating between modules
- Input validation with error handling in all modules
- Reusable functions with well-defined parameters and return values
- Clean, commented code following Python best practices
- Alignment with the Sustainable Development Goals (SDGs)
- Simulation of real urban engineering scenarios
```

---

## Project Structure

```
SIA-Smart/
|
+-- main.py                              # Main entry point of the system
+-- README.md                            # Project documentation
|
+-- modules/                             # Directory containing all modules
|   +-- __init__.py
|   +-- 01_rack_management.py            # Rack management in Data Center
|   +-- 02_content_filter.py             # Age-based content filter
|   +-- 03_subnet_optimization.py        # Subnet optimization
|   +-- 04_predictive_maintenance.py     # Predictive maintenance
|   +-- 05_ecological_classification.py  # Ecological hardware classification
|   +-- 06_bandwidth_management.py       # Bandwidth management
|   +-- 07_pin_validation_ip_block.py    # PIN validation and IP blocking
|   +-- 08_intelligent_routing.py        # Intelligent routing
|   +-- 09_flood_alert.py                # Flood alert
|   +-- 10_social_billing.py             # Social internet billing
|
+-- docs/                                # Additional documentation
    +-- technical_report.pdf
```

---

## Modularity in Python

**Modular programming** is a paradigm that consists of dividing a program into smaller, independent, and reusable parts called **modules**. In SIA-Smart, each engineering problem was encapsulated in its own `.py` file, which brings several advantages:

```
Organization    ->  Code separated by responsibility
Reusability     ->  Functions can be called by other modules
Maintainability ->  Errors isolated to specific modules
Testability     ->  Each module can be tested individually
Collaboration   ->  Facilitates teamwork
```

**How modules are imported in `main.py`:**

```python
# main.py
from modules import rack_management
from modules import content_filter
from modules import subnet_optimization
# ... remaining modules

def main_menu():
    print("=" * 50)
    print("   SIA-Smart -- Intelligent Urban System")
    print("=" * 50)
    print("[1] Rack Management in Data Center")
    print("[2] Age-Based Content Filter")
    print("[3] Subnet Optimization")
    # ...
```

---

## Use of Functions (`def`)

**Functions** (`def`) are the core of this project. Each module defines functions with a single purpose, receiving parameters and returning processed results.

### Example -- Module 07: PIN Validation and IP Blocking

```python
# modules/07_pin_validation_ip_block.py

MAX_ATTEMPTS = 3
blocked_ips = []

def validate_pin(entered_pin: str, correct_pin: str) -> bool:
    """
    Validates whether the entered PIN matches the correct one.

    Args:
        entered_pin  (str): PIN entered by the user.
        correct_pin  (str): PIN stored in the system.

    Returns:
        bool: True if the PIN is valid, False otherwise.
    """
    return entered_pin == correct_pin


def block_ip(ip: str) -> None:
    """Adds an IP address to the blocked list."""
    if ip not in blocked_ips:
        blocked_ips.append(ip)
        print(f"[SECURITY] IP {ip} blocked after exceeding attempts.")


def authenticate_user(ip: str, correct_pin: str) -> bool:
    """
    Manages the authentication process with attempt control.

    Returns:
        bool: True if authentication was successful.
    """
    if ip in blocked_ips:
        print(f"[ERROR] Access denied. IP {ip} is blocked.")
        return False

    attempts = 0
    while attempts < MAX_ATTEMPTS:
        pin = input("Enter your PIN: ")
        if validate_pin(pin, correct_pin):
            print("[OK] Authentication successful.")
            return True
        attempts += 1
        print(f"[WARNING] Incorrect PIN. Remaining attempts: {MAX_ATTEMPTS - attempts}")

    block_ip(ip)
    return False
```

### Example -- Module 09: Flood Alert

```python
# modules/09_flood_alert.py

ALERT_LEVEL    = 70   # cm -- caution level
CRITICAL_LEVEL = 120  # cm -- evacuation level

def read_sensor(sensor_id: int) -> float:
    """Simulates reading a water level sensor."""
    readings = {1: 45.0, 2: 85.5, 3: 130.2, 4: 20.0}
    return readings.get(sensor_id, 0.0)


def classify_level(level_cm: float) -> str:
    """Classifies the water level and returns the alert status."""
    if level_cm >= CRITICAL_LEVEL:
        return "[CRITICAL] Evacuate the area immediately"
    elif level_cm >= ALERT_LEVEL:
        return "[ALERT]    Intensive monitoring activated"
    else:
        return "[NORMAL]   No risk detected"


def issue_alert(sensor_id: int) -> None:
    """Coordinates sensor reading and alert emission."""
    level = read_sensor(sensor_id)
    status = classify_level(level)
    print(f"Sensor #{sensor_id} | Level: {level:.1f} cm | Status: {status}")
```

---

## Alignment with the SDGs

SIA-Smart was developed with social and environmental awareness, aligning with two **UN Sustainable Development Goals**:

<table>
<tr>
<td width="50%" align="center">

### SDG 4

**Quality Education**

The project demonstrates how programming can be taught through **real and relevant problems**, making learning more meaningful and connected to societal challenges. Each module functions as a case study that can be adapted and expanded for educational purposes.

</td>
<td width="50%" align="center">

### SDG 9

**Industry, Innovation and Infrastructure**

The modules directly address topics such as **data center management**, **network optimization**, **intelligent routing**, and **urban sensors** — pillars of modern technological infrastructure and sustainable industrial innovation.

</td>
</tr>
</table>

---

## Installation

### Prerequisites

| Requirement | Minimum Version | Download                                               |
| ----------- | --------------- | ------------------------------------------------------ |
| Python      | 3.8+            | [python.org](https://python.org)                       |
| VS Code     | Any             | [code.visualstudio.com](https://code.visualstudio.com) |

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/SIA-Smart.git

# 2. Navigate to the project directory
cd SIA-Smart

# 3. (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate        # Linux/macOS
venv\Scripts\activate           # Windows

# 4. Install dependencies (if any)
pip install -r requirements.txt
```

> **Note:** The project uses only the **Python standard library**, so no additional installation is required for the basic setup.

---

## Running the Project

### Run the main menu

```bash
python main.py
```

### Run a specific module directly

```bash
python modules/07_pin_validation_ip_block.py
python modules/09_flood_alert.py
```

### Expected main menu output

```
==================================================
   SIA-Smart -- Intelligent Urban System
   Basic Programming | Systems Engineering
==================================================

 [1]  Rack Management in Data Center
 [2]  Age-Based Content Filter
 [3]  Subnet Optimization
 [4]  Predictive Maintenance
 [5]  Ecological Hardware Classification
 [6]  Bandwidth Management
 [7]  PIN Validation and IP Blocking
 [8]  Intelligent Routing
 [9]  Flood Alert
 [10] Social Internet Billing
 [0]  Exit

Select an option: _
```

---

## Usage Examples

### Module 03 -- Subnet Optimization

```
Enter the base network address: 192.168.1.0
Enter the CIDR mask (e.g. 24): 26
Number of required hosts: 50

> Subnet:           192.168.1.0/26
> Mask:             255.255.255.192
> Available hosts:  62
> Broadcast:        192.168.1.63
[OK] The subnet supports the required 50 hosts.
```

### Module 05 -- Ecological Hardware Classification

```
Enter the component type: processor
Enter the manufacturing year: 2015
Enter the energy consumption (W): 95

> Component:           PROCESSOR
> Age:                 9 years
> Consumption:         95 W
> Ecological rating:   MODERATE
> Recommendation: Consider replacing for greater energy efficiency.
```

### Module 10 -- Social Internet Billing

```
Enter monthly consumption (GB): 120
Enter user type [residential/commercial/social]: social

> Consumption:         120 GB
> Base rate:           $0.08/GB
> Social discount:     40%
> Total due:           $5.76
[OK] Invoice generated successfully.
```

---

## Academic Notes

> **ACADEMIC NOTICE**
>
> This project was developed exclusively for **educational purposes** within the **Basic Programming** course of the **Systems Engineering** program.
>
> - The data used in the modules is **simulated** and does not represent real infrastructure.
> - The algorithms were implemented with **didactic goals**, prioritizing readability and clarity over maximum performance optimization.
> - The project demonstrates the fundamental concepts of **functions (`def`)**, **modularity**, **control structures**, and **Python best practices**.

| Field           | Detail                           |
| --------------- | -------------------------------- |
| **Institution** | Faculty of Systems Engineering   |
| **Course**      | Basic Programming                |
| **Instructor**  | Edmundo Rivas Vargas             |
| **Author**      | Bryan Maciel de Almeida          |
| **Period**      | June 2026                        |
| **Location**    | Santa Cruz de la Sierra, Bolivia |

---

## Conclusion

**SIA-Smart** demonstrates how **modular Python programming** can be applied to solve real and complex urban engineering problems in an organized, scalable, and sustainable way.

Each module represents an encapsulated solution to a specific challenge, and the integration of all of them into a single system illustrates the power of **modular architecture** in professional software development.

This project reinforces that programming goes beyond syntax — it is a powerful tool for building solutions that positively impact society, aligned with the **Sustainable Development Goals** and with the vision of a more humane and responsible engineering practice.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213e,50:1a1a2e,100:0D1117&height=120&section=footer" width="100%"/>

**SIA-Smart** · Basic Programming · Systems Engineering

Made by **Bryan Maciel de Almeida** · Santa Cruz de la Sierra · 2026

![](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![](https://img.shields.io/badge/Engineering-00d4ff?style=flat-square)
![](https://img.shields.io/badge/SDGs-00C853?style=flat-square)

</div>