CREATE USER evaaldo WITH PASSWORD '230520';
CREATE DATABASE api_plataforma_treinamentos_development;
GRANT ALL PRIVILEGES ON DATABASE api_plataforma_treinamentos_development TO evaaldo;

\connect api_plataforma_treinamentos_development;

CREATE TABLE IF NOT EXISTS teachers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lessons (
  id SERIAL PRIMARY KEY,
  videoId TEXT NOT NULL,
  formation TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  date TEXT,
  isAvailable BOOLEAN,
  isLive BOOLEAN,
  teacher_id INTEGER REFERENCES teachers(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO evaaldo;

-- Permissões e ownership
ALTER ROLE evaaldo WITH CREATEDB;
ALTER DATABASE api_plataforma_treinamentos_development OWNER TO evaaldo;
ALTER TABLE teachers OWNER TO evaaldo;
ALTER TABLE lessons OWNER TO evaaldo;
ALTER TABLE users OWNER TO evaaldo;
