# PainelGPT — Visão Geral

## Objetivo
Criar um dashboard para **monitorar a qualidade do cardápio no Geraldo** por restaurante/categoria/item, destacando:
- Itens **sem foto**
- Itens **sem descrição**
- Itens **sem preço** (incluindo falhas por tamanho/variação)

O **iFood é acessório**: entra como fonte auxiliar para **preencher lacunas** (foto/descrição/preço) quando houver match, sem desviar o foco do monitoramento do Geraldo.

## Princípios do produto
1) **Home = lista de restaurantes** (rápido, navegável, com contadores).
2) **Tudo tem contexto e “endereço”**:
   - Sempre mostrar de qual restaurante/categoria o item é
   - Sempre ter links rápidos do restaurante (Geraldo / Cardápio / iFood quando existir)
3) **Performance primeiro**:
   - Paginação sempre
   - Select só do necessário
   - Views/RPC para contadores e flags
4) **Match é governado**:
   - `item_matches` alimenta comparação e sugestões (auto/confirmado/rejeitado/sem_match)
   - Auto aparece sempre, mas com badge de confiança e CTA pra confirmar

## Escopo (MVP)
- Home com KPIs + lista de restaurantes + filtros rápidos
- Modal de resumo do restaurante
- Página do restaurante com tabs:
  - Monitor Geraldo ⭐ (principal)
  - Itens
  - Categorias
  - iFood (Preencher) (acessório)
  - Matches (governança)
- Itens Global (auditoria geral)

## Fora do escopo (por enquanto)
- “Aplicar no Geraldo” automaticamente (botão que escreve no painel)
- Match 100% automático perfeito (vai ser incremental)
- OCR/IA pesada no front
