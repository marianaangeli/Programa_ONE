
# 🚀 Telecom X – Parte 2: Inteligência Preditiva de Churn

Este repositório contém o desenvolvimento da segunda etapa do desafio **Telecom X**, focada na construção de modelos de Machine Learning para prever a evasão de clientes.

## 📋 Contextualização
A retenção de clientes é um dos pilares estratégicos da Telecom X. Após a análise exploratória inicial, este projeto avança para a fase de **Inteligência Preditiva**. O objetivo principal é antecipar quais clientes possuem maior probabilidade de cancelar seus serviços, permitindo que a empresa realize ações preventivas e reduza a taxa de evasão.

## 🎯 Missão e Objetivos
* **Tratamento de Dados:** Ingestão de JSON aninhado, normalização (flattening) e limpeza de IDs.
* **Análise de Desbalanceamento:** Cálculo da proporção de classes para mitigar vieses e avaliação de desequilíbrio.
* **Engenharia de Variáveis:** Aplicação de Encoding (Dummies) e Normalização (StandardScaler).
* **Balanceamento:** Utilização da técnica SMOTE para equilibrar a base de treino.
* **Modelagem:** Treinamento e comparação entre **Regressão Logística** e **Random Forest**.
* **Interpretação:** Identificação dos principais fatores que influenciam a evasão através da importância das variáveis.

## 🛠️ Tecnologias Utilizadas
* **Python 3.12**
* **Pandas & NumPy** (Manipulação e tratamento de dados)
* **Seaborn & Matplotlib** (Visualização estatística)
* **Scikit-Learn** (Algoritmos de Machine Learning e métricas de avaliação)
* **Imbalanced-learn (SMOTE)** (Técnica de balanceamento de classes)

## 📊 Principais Resultados

### Matriz de Correlação
Identificamos as relações críticas entre as variáveis numéricas e o Churn. O tempo de contrato (**tenure**) demonstrou ser o fator com maior correlação negativa com a evasão.



### Desempenho dos Modelos
Abaixo, a comparação de performance entre os modelos testados após o balanceamento dos dados:

| Modelo | Acurácia | Precisão (Churn) | Recall (Churn) |
| :--- | :--- | :--- | :--- |
| 📈 Regressão Logística | 74% | 51% | 72% |
| 🌲 Random Forest | 78% | 59% | 52% |

> **Insight Técnico:** O modelo **Regressão Logística** apresentou um **Recall** superior, sendo mais eficiente em capturar clientes que
