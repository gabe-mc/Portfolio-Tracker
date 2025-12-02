# NorthPeak - Portfoilio Tracker

NorthPeak is a mobile investing companion that lets users track portfolios, set long-term financial goals, and view automatically refreshed market insights. The app also includes a built-in AI chat assistant to answer questions about investments, help set long-term goals, and quickly get up-to-date with the day's news.

High-level architecture:

```text
📱 React Native App (TypeScript)
          │  (HTTPS/JSON)
          ▼
🛠️ Ruby on Rails API (API mode)
          │  (SQL)
          ▼
🗄️ PostgreSQL on AWS RDS
          ▲
          │  (ETL / metrics jobs)
          ▼
⚙️ Apache Airflow on AWS (MWAA/ECS)
```