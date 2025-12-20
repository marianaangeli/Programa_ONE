# Análise Comparativa de Performance e Viabilidade Operacional - Alura Store

## Sobre o Projeto

Este projeto apresenta uma análise de dados completa desenvolvida para auxiliar na tomada de decisão estratégica do Senhor João, proprietário da rede varejista Alura Store. O objetivo é identificar qual das 4 lojas da rede apresenta a menor eficiência operacional e financeira, subsidiando a decisão de venda para levantar capital destinado a um novo empreendimento.

## Contexto do Negócio

A Alura Store opera 4 unidades de varejo e precisa realizar um desinvestimento estratégico. A escolha da unidade a ser vendida baseia-se em análise quantitativa de múltiplos indicadores de performance, garantindo que a decisão maximize o retorno financeiro e minimize riscos operacionais futuros.

## Estrutura do Projeto

```
alura-store-analysis/
│
├── data/
│   ├── loja_1.csv
│   ├── loja_2.csv
│   ├── loja_3.csv
│   └── loja_4.csv
│
├── notebooks/
│   └── Alura_Store.ipynb
│
├── images/
│   └── [gráficos gerados]
│
├── README.md
└── conclusao.md
```

## Dados Analisados

Cada dataset contém informações transacionais das lojas:
- **Data da Compra**: Período das transações
- **Preço**: Valor de cada venda
- **Frete**: Custo de entrega
- **Avaliação da compra**: Satisfação do cliente (escala)
- **Categoria do Produto**: Segmento dos produtos vendidos

## Metodologia

### Métricas Calculadas

1. **Indicadores Financeiros**
   - Faturamento Total
   - Ticket Médio
   - Frete Total
   - Eficiência Financeira (Margem após Frete)

2. **Satisfação do Cliente**
   - Avaliação Média
   - Distribuição de Avaliações
   - Percentual de Avaliações Positivas/Negativas

3. **Análise Temporal**
   - Sazonalidade de Vendas
   - Taxa de Crescimento Mensal
   - Média Móvel (3 meses)
   - Volatilidade

4. **Diversificação**
   - Índice de Herfindahl
   - Mix de Produtos
   - Concentração de Categorias

5. **Score Composto**
   - Ranking ponderado considerando todos os indicadores
   - Normalização 0-100 para comparabilidade

### Análises Realizadas

- Análise exploratória de dados (EDA)
- Análise de correlação (Frete vs Satisfação)
- Estudo de sazonalidade e tendências temporais
- Análise de risco e previsibilidade
- Benchmarking comparativo entre unidades

## Tecnologias Utilizadas

- **Python 3.x**
- **pandas**: Manipulação e análise de dados
- **matplotlib**: Visualizações
- **seaborn**: Gráficos estatísticos
- **scikit-learn**: Normalização e cálculo de scores

## Principais Resultados

### Loja 4 - Indicada para Venda

**Pontos Críticos:**
- Menor faturamento total
- Ticket médio mais baixo
- Alta volatilidade (35.23%)
- Queda nos últimos 3 meses (-1.85%)
- Menor score composto final

**Justificativa:**
A Loja 4 apresentou desempenho inferior em praticamente todos os indicadores analisados, demonstrando menor potencial de crescimento e maior risco operacional.

### Destaques Positivos

**Loja 1**: Maior estabilidade e único crescimento recente positivo (+4.31%)

**Loja 3**: Melhor avaliação dos clientes e alta eficiência financeira

**Loja 2**: Performance equilibrada e faturamento robusto

## Como Executar

### Pré-requisitos

```bash
pip install pandas matplotlib seaborn scikit-learn
```

### Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/alura-store-analysis.git
cd alura-store-analysis
```

2. Abra o Jupyter Notebook:
```bash
jupyter notebook notebooks/Alura_Store.ipynb
```

3. Execute todas as células sequencialmente

## Visualizações

O projeto inclui diversos gráficos:
- Faturamento por loja
- Distribuição de avaliações (boxplot)
- Top categorias em faturamento
- Correlação frete vs satisfação
- Evolução temporal de vendas
- Taxa de crescimento mensal
- Índice de diversificação
- Score final comparativo

## Conclusão

A análise recomenda a **venda da Loja 4** como estratégia ideal para:
- Liberar capital para novos investimentos
- Reduzir exposição a ativos de baixa performance
- Concentrar esforços gerenciais em unidades mais rentáveis
- Melhorar a previsibilidade financeira da rede

Para detalhes completos, consulte [conclusao.md](conclusao.md).

## Próximos Passos

- Análise de custos fixos operacionais
- Avaliação imobiliária do ponto comercial
- Estratégia de transição de clientes
- Due diligence para precificação de venda

## Autor

Desenvolvido como parte do desafio de análise de dados da Alura.

## Licença

Este projeto é de uso educacional e demonstrativo.

---

**Nota**: Os dados utilizados são fictícios e criados para fins educacionais.
