# PainelGPT

Dashboard para monitorar a qualidade do cardápio no Geraldo, com iFood como fonte auxiliar para preencher lacunas.

## Setup

1. Copie o arquivo de exemplo de ambiente:

```bash
cp .env.example .env
```

2. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.

3. Instale dependências e rode:

```bash
npm install
npm run dev
```

## Estrutura inicial

- Layout base (Sidebar + Topbar)
- Rotas principais
- `LinkResolver` com padrão de links
- `supabaseClient` pronto para uso
