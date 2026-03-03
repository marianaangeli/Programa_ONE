# 📊 Projeto Telecom X: Inteligência de Dados e Diagnóstico de Churn

Este projeto apresenta um diagnóstico detalhado sobre a evasão de clientes (Churn) da **Telecom X**, utilizando técnicas de ETL e Análise Exploratória de Dados (EDA) para identificar pontos críticos de perda de faturamento.

## 🎯 Sumário Executivo
A análise identificou que a taxa geral de churn é de **25,72%**, com um impacto direto em clientes de maior valor agregado.

### 📈 Principais Descobertas
* **Risco Tecnológico:** Clientes que utilizam **Fibra Óptica** possuem a maior taxa de evasão (**40,6%**), sugerindo a necessidade de revisão técnica ou de precificação.
* **Fator Operacional:** O método de pagamento por **Electronic Check** registra um churn de **43,8%**, sendo o principal ofensor entre os meios de recebimento.
* **Ciclo de Vida:** Novos clientes (com até 12 meses de base) apresentam um risco de evasão de **45,8%**, contra apenas **16,6%** de clientes retidos há mais tempo.
* **Impacto Financeiro:** O ticket médio dos clientes em churn (**R$ 74,44**) é superior ao dos ativos (**R$ 61,35**), resultando em uma perda mensal recorrente (MRR) de **R$ 139.130,85**.

## 🛠️ Tecnologias Utilizadas
* **Linguagem:** Python 3.12
* **Bibliotecas:** Pandas, Matplotlib, Seaborn
* **Ambiente:** Google Colab / Jupyter Notebook

## 🚀 Recomendações Estratégicas
1. **Incentivo à Automação:** Criar campanhas para migração de clientes de métodos manuais para débito automático ou cartão de crédito.
2. **Auditoria de Produto:** Investigar a estabilidade do serviço de Fibra Óptica nos clusters de maior cancelamento.
3. **Régua de Retenção:** Implementar ações de engajamento específicas para o primeiro ano de contrato, focando no "onboarding" do cliente.

---
*Projeto desenvolvido como parte do portfólio de análise de dados para o Programa ONE.*
