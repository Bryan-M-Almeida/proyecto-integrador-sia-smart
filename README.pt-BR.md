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

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1a1a2e,100:16213e&height=200&section=header&text=SIA-Smart&fontSize=72&fontColor=00d4ff&fontAlignY=38&desc=Sistema%20Inteligente%20de%20Automatização%20Urbana&descAlignY=60&descSize=20&descColor=c9d1d9" width="100%"/>

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-00C853?style=for-the-badge&logo=checkmarx&logoColor=white)
![Licença](https://img.shields.io/badge/Licença-Acadêmico-blueviolet?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

![Módulos](https://img.shields.io/badge/Módulos-10-ff6b35?style=for-the-badge&logo=databricks&logoColor=white)
![ODS 4](https://img.shields.io/badge/ODS%204-Educação%20de%20Qualidade-c21807?style=for-the-badge&logo=bookstack&logoColor=white)
![ODS 9](https://img.shields.io/badge/ODS%209-Inovação%20e%20Infraestrutura-fd6a02?style=for-the-badge&logo=blueprint&logoColor=white)

<br/>

> **SIA-Smart** é um sistema modular em Python que resolve **10 problemas reais de engenharia urbana**, abrangendo automação, redes, cibersegurança, sustentabilidade e gestão de infraestrutura inteligente.

<br/>

[![Curso](https://img.shields.io/badge/Engenharia%20de%20Sistemas-Universidade-1a1a2e?style=flat-square&logo=academia&logoColor=white)](.)
[![Disciplina](https://img.shields.io/badge/Programação%20Básica-Disciplina-16213e?style=flat-square&logo=codecademy&logoColor=white)](.)
[![Cidade](https://img.shields.io/badge/Santa%20Cruz%20de%20la%20Sierra-Bolívia-009B3A?style=flat-square&logo=googlemaps&logoColor=white)](.)

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Módulos do Sistema](#módulos-do-sistema)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Modularidade em Python](#modularidade-em-python)
- [Uso de Funções (`def`)](#uso-de-funções-def)
- [Alinhamento com os ODS](#alinhamento-com-os-ods)
- [Instalação](#instalação)
- [Execução](#execução)
- [Exemplos de Uso](#exemplos-de-uso)
- [Observações Acadêmicas](#observações-acadêmicas)
- [Conclusão](#conclusão)
- [Autor](#autor)

---

## Sobre o Projeto

**SIA-Smart** (*Sistema Inteligente de Automatización Urbana*) é um projeto acadêmico desenvolvido para a disciplina de **Programação Básica** do curso de **Engenharia de Sistemas**. O sistema aborda desafios reais da engenharia moderna por meio de **programação modular em Python**, organizando cada solução como um módulo independente e reutilizável.

A proposta integra conceitos de:

- Automação urbana e controle de tráfego
- Redes e otimização de sub-redes
- Cibersegurança e validação de acessos
- Sustentabilidade e classificação ecológica
- Gestão energética e sensores inteligentes
- Sistemas de alerta e prevenção de desastres

---

## Módulos do Sistema

O sistema é composto por **10 módulos independentes**, cada um resolvendo um problema específico de engenharia:

| # | Módulo | Área | Descrição |
|---|--------|------|-----------|
| `01` | **Gestão de Racks em Data Center** | Infraestrutura | Gerencia a alocação e ocupação de racks físicos em data centers |
| `02` | **Filtro de Conteúdo por Idade** | Segurança Digital | Restringe acesso a conteúdos com base na faixa etária do usuário |
| `03` | **Otimização de Sub-redes** | Redes | Calcula e otimiza o endereçamento de sub-redes para máxima eficiência |
| `04` | **Manutenção Preditiva** | Automação | Analisa dados de sensores para prever falhas em equipamentos urbanos |
| `05` | **Classificação Ecológica de Hardware** | Sustentabilidade | Classifica componentes eletrônicos conforme critérios ambientais |
| `06` | **Gestão de Largura de Banda** | Redes | Controla e distribui a largura de banda entre usuários e serviços |
| `07` | **Validação de PIN e Bloqueio de IP** | Cibersegurança | Valida PINs e bloqueia endereços IP após tentativas falhas |
| `08` | **Roteamento Inteligente** | Tráfego Urbano | Determina as melhores rotas em redes urbanas com base em métricas |
| `09` | **Alerta de Inundação** | Sensores / Segurança | Processa dados de sensores para emitir alertas de inundação em tempo real |
| `10` | **Faturamento Social de Internet** | Gestão Energética | Calcula tarifas de internet com critérios sociais e de consumo justo |

---

## Funcionalidades

```
- Sistema totalmente modular — cada módulo funciona de forma independente
- Menu interativo no terminal para navegação entre os módulos
- Validação de entradas com tratamento de erros em todos os módulos
- Funções reutilizáveis com parâmetros e retornos bem definidos
- Código limpo, comentado e seguindo boas práticas de Python
- Alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS)
- Simulação de cenários reais de engenharia urbana
```

---

## Estrutura do Projeto

```
SIA-Smart/
|
+-- main.py                                   # Ponto de entrada principal do sistema
+-- README.md                                 # Documentação do projeto
|
+-- modulos/                                  # Diretório com todos os módulos
|   +-- __init__.py
|   +-- 01_gestao_racks.py                    # Gestão de racks em Data Center
|   +-- 02_filtro_conteudo.py                 # Filtro de conteúdo por idade
|   +-- 03_otimizacao_subredes.py             # Otimização de sub-redes
|   +-- 04_manutencao_preditiva.py            # Manutenção preditiva
|   +-- 05_classificacao_ecologica.py         # Classificação ecológica de hardware
|   +-- 06_gestao_largura_banda.py            # Gestão de largura de banda
|   +-- 07_validacao_pin_ip.py                # Validação de PIN e bloqueio de IP
|   +-- 08_roteamento_inteligente.py          # Roteamento inteligente
|   +-- 09_alerta_inundacao.py                # Alerta de inundação
|   +-- 10_faturamento_social.py              # Faturamento social de internet
|
+-- docs/                                     # Documentação adicional
    +-- relatorio_tecnico.pdf
```

---

## Modularidade em Python

A **programação modular** é um paradigma que consiste em dividir um programa em partes menores, independentes e reutilizáveis chamadas **módulos**. No SIA-Smart, cada problema de engenharia foi encapsulado em seu próprio arquivo `.py`, o que traz diversas vantagens:

```
Organização     ->  Código separado por responsabilidade
Reutilização    ->  Funções podem ser chamadas por outros módulos
Manutenção      ->  Erros isolados em módulos específicos
Testabilidade   ->  Cada módulo pode ser testado individualmente
Colaboração     ->  Facilita o trabalho em equipe
```

**Como os módulos são importados no `main.py`:**

```python
# main.py
from modulos import gestao_racks
from modulos import filtro_conteudo
from modulos import otimizacao_subredes
# ... demais módulos

def menu_principal():
    print("=" * 50)
    print("   SIA-Smart -- Sistema Inteligente Urbano")
    print("=" * 50)
    print("[1] Gestão de Racks em Data Center")
    print("[2] Filtro de Conteúdo por Idade")
    print("[3] Otimização de Sub-redes")
    # ...
```

---

## Uso de Funções (`def`)

O uso de **funções** (`def`) é o coração do projeto. Cada módulo define funções com propósito único, recebendo parâmetros e retornando resultados processados.

### Exemplo -- Módulo 07: Validação de PIN e Bloqueio de IP

```python
# modulos/07_validacao_pin_ip.py

TENTATIVAS_MAXIMAS = 3
ips_bloqueados = []

def validar_pin(pin_digitado: str, pin_correto: str) -> bool:
    """
    Valida se o PIN digitado corresponde ao PIN correto.

    Args:
        pin_digitado (str): PIN inserido pelo usuário.
        pin_correto  (str): PIN armazenado no sistema.

    Returns:
        bool: True se o PIN for válido, False caso contrário.
    """
    return pin_digitado == pin_correto


def bloquear_ip(ip: str) -> None:
    """Adiciona um endereço IP à lista de bloqueados."""
    if ip not in ips_bloqueados:
        ips_bloqueados.append(ip)
        print(f"[SEGURANÇA] IP {ip} bloqueado por exceder tentativas.")


def autenticar_usuario(ip: str, pin_correto: str) -> bool:
    """
    Gerencia o processo de autenticação com controle de tentativas.

    Returns:
        bool: True se a autenticação for bem-sucedida.
    """
    if ip in ips_bloqueados:
        print(f"[ERRO] Acesso negado. IP {ip} está bloqueado.")
        return False

    tentativas = 0
    while tentativas < TENTATIVAS_MAXIMAS:
        pin = input("Digite seu PIN: ")
        if validar_pin(pin, pin_correto):
            print("[OK] Autenticação bem-sucedida.")
            return True
        tentativas += 1
        print(f"[AVISO] PIN incorreto. Tentativas restantes: {TENTATIVAS_MAXIMAS - tentativas}")

    bloquear_ip(ip)
    return False
```

### Exemplo -- Módulo 09: Alerta de Inundação

```python
# modulos/09_alerta_inundacao.py

NIVEL_ALERTA   = 70   # cm -- nível de cautela
NIVEL_CRITICO  = 120  # cm -- nível de evacuação

def ler_sensor(sensor_id: int) -> float:
    """Simula a leitura de um sensor de nível de água."""
    leituras = {1: 45.0, 2: 85.5, 3: 130.2, 4: 20.0}
    return leituras.get(sensor_id, 0.0)


def classificar_nivel(nivel_cm: float) -> str:
    """Classifica o nível da água e retorna o estado de alerta."""
    if nivel_cm >= NIVEL_CRITICO:
        return "[CRITICO] Evacuar a área imediatamente"
    elif nivel_cm >= NIVEL_ALERTA:
        return "[ALERTA]  Monitoramento intensivo ativado"
    else:
        return "[NORMAL]  Nenhum risco detectado"


def emitir_alerta(sensor_id: int) -> None:
    """Coordena a leitura do sensor e a emissão do alerta."""
    nivel = ler_sensor(sensor_id)
    estado = classificar_nivel(nivel)
    print(f"Sensor #{sensor_id} | Nível: {nivel:.1f} cm | Estado: {estado}")
```

---

## Alinhamento com os ODS

O SIA-Smart foi desenvolvido com consciência social e ambiental, alinhando-se a dois **Objetivos de Desenvolvimento Sustentável** da ONU:

<table>
<tr>
<td width="50%" align="center">

### ODS 4
**Educação de Qualidade**

O projeto demonstra como a programação pode ser ensinada por meio de **problemas reais e relevantes**, tornando o aprendizado mais significativo e conectado com os desafios da sociedade. Cada módulo funciona como um estudo de caso que pode ser adaptado e expandido para fins educacionais.

</td>
<td width="50%" align="center">

### ODS 9
**Indústria, Inovação e Infraestrutura**

Os módulos abordam diretamente temas como **gestão de data centers**, **otimização de redes**, **roteamento inteligente** e **sensores urbanos** — pilares da infraestrutura tecnológica moderna e da inovação industrial sustentável.

</td>
</tr>
</table>

---

## Instalação

### Pré-requisitos

| Requisito | Versão mínima | Download |
|-----------|--------------|---------|
| Python | 3.8+ | [python.org](https://python.org) |
| VS Code | Qualquer | [code.visualstudio.com](https://code.visualstudio.com) |

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/SIA-Smart.git

# 2. Acesse o diretório do projeto
cd SIA-Smart

# 3. (Opcional) Crie um ambiente virtual
python -m venv venv
source venv/bin/activate        # Linux/macOS
venv\Scripts\activate           # Windows

# 4. Instale as dependências (se houver)
pip install -r requirements.txt
```

> **Nota:** O projeto utiliza apenas a **biblioteca padrão do Python**, portanto nenhuma instalação adicional é necessária na configuração básica.

---

## Execução

### Executar o menu principal

```bash
python main.py
```

### Executar um módulo específico diretamente

```bash
python modulos/07_validacao_pin_ip.py
python modulos/09_alerta_inundacao.py
```

### Saída esperada do menu principal

```
==================================================
   SIA-Smart -- Sistema Inteligente Urbano
   Programação Básica | Eng. de Sistemas
==================================================

 [1]  Gestão de Racks em Data Center
 [2]  Filtro de Conteúdo por Idade
 [3]  Otimização de Sub-redes
 [4]  Manutenção Preditiva
 [5]  Classificação Ecológica de Hardware
 [6]  Gestão de Largura de Banda
 [7]  Validação de PIN e Bloqueio de IP
 [8]  Roteamento Inteligente
 [9]  Alerta de Inundação
 [10] Faturamento Social de Internet
 [0]  Sair

Selecione uma opção: _
```

---

## Exemplos de Uso

### Módulo 03 -- Otimização de Sub-redes
```
Digite o endereço de rede base: 192.168.1.0
Digite a máscara CIDR (ex: 24): 26
Número de hosts necessários: 50

> Sub-rede:          192.168.1.0/26
> Máscara:           255.255.255.192
> Hosts disponíveis: 62
> Broadcast:         192.168.1.63
[OK] A sub-rede suporta os 50 hosts necessários.
```

### Módulo 05 -- Classificação Ecológica de Hardware
```
Digite o tipo de componente: processador
Digite o ano de fabricação: 2015
Digite o consumo energético (W): 95

> Componente:        PROCESSADOR
> Antiguidade:       9 anos
> Consumo:           95 W
> Classificação:     MODERADO
> Recomendação: Considere substituir para maior eficiência energética.
```

### Módulo 10 -- Faturamento Social de Internet
```
Digite o consumo mensal (GB): 120
Digite o tipo de usuário [residencial/comercial/social]: social

> Consumo:           120 GB
> Tarifa base:       R$ 0,08/GB
> Desconto social:   40%
> Total a pagar:     R$ 5,76
[OK] Fatura gerada com sucesso.
```

---

## Observações Acadêmicas

> **AVISO ACADÊMICO**
>
> Este projeto foi desenvolvido exclusivamente para fins **educacionais** no âmbito da disciplina de **Programação Básica** do curso de **Engenharia de Sistemas**.
>
> - Os dados utilizados nos módulos são **simulados** e não representam infraestruturas reais.
> - Os algoritmos foram implementados com **fins didáticos**, priorizando legibilidade e clareza sobre otimização máxima de desempenho.
> - O projeto demonstra os conceitos fundamentais de **funções (`def`)**, **modularidade**, **estruturas de controle** e **boas práticas** em Python.

| Campo | Detalhe |
|-------|---------|
| **Instituição** | Faculdade de Engenharia de Sistemas |
| **Disciplina** | Programação Básica |
| **Docente** | Edmundo Rivas Vargas |
| **Autor** | Bryan Maciel de Almeida |
| **Período** | Junho 2026 |
| **Local** | Santa Cruz de la Sierra, Bolívia |

---

## Conclusão

**SIA-Smart** demonstra como a **programação modular em Python** pode ser aplicada para resolver problemas reais e complexos de engenharia urbana de forma organizada, escalável e sustentável.

Cada módulo representa uma solução encapsulada para um desafio específico, e a integração de todos eles em um único sistema ilustra o poder da **arquitetura modular** no desenvolvimento de software profissional.

Este projeto reforça que a programação vai além da sintaxe — é uma ferramenta poderosa para construir soluções que impactam positivamente a sociedade, alinhando-se com os **Objetivos de Desenvolvimento Sustentável** e com a visão de uma engenharia mais humana e responsável.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213e,50:1a1a2e,100:0D1117&height=120&section=footer" width="100%"/>

**SIA-Smart** · Programação Básica · Engenharia de Sistemas

Desenvolvido por **Bryan Maciel de Almeida** · Santa Cruz de la Sierra · 2026

![](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![](https://img.shields.io/badge/Engenharia-00d4ff?style=flat-square)
![](https://img.shields.io/badge/ODS-00C853?style=flat-square)

</div>