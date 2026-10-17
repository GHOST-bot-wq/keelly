# Kelly Rezende | Divina Derma — Estética Facial Avançada

> Site institucional premium desenvolvido sob os princípios do luxo contemporâneo, tipografia editorial, código sem dependências externas pesadas e arquitetura pronta para produção e deploy imediato na Vercel.

---

## 💎 Identidade Visual & Conceito

- **Paleta de Cores Oficial:**
  - Off-white (`#F8F5F0`)
  - Bege Champagne (`#E9DED2`)
  - Nude Rosado (`#D7BDB4`)
  - Marrom Profundo (`#3B302C`)
  - Grafite (`#242220`)
  - Dourado Fosco (`#B79A65`)
- **Tipografia:** *Cormorant Garamond* (títulos de autoridade) + *Manrope* (leitura e interface).
- **Linguagem Visual:** Composição editorial assimétrica, respiro sofisticado, sem elementos genéricos de IA.

---

## 📸 As 4 Imagens Oficiais Utilizadas

O projeto faz uso efetivo e respeitoso das 4 imagens fornecidas:

1. **`kelly-rezende-profissional.png`** (Retrato de Kelly Rezende):
   - Fotografia da fundadora e especialista.
   - Utilizada com destaque no **Hero** (com moldura dourada e badge "9 Anos Transformando Peles") e na **Apresentação da Profissional** (seção Sobre).
2. **`procedimento-limpeza-massagem.png`** (Higienização & Manobras de Cabine):
   - Registro real com luvas pretas cirúrgicas, emoliência e vaporizador facial ao fundo.
   - Utilizada na seção de **Resultados & Cabine**.
3. **`protocolo-mascara-facial.png`** (Máscara Calmante & Nutrição):
   - Registro de paciente em repouso com máscara regeneradora e proteção ocular.
   - Utilizada na seção de **Resultados & Cabine**.
4. **`tecnologia-cosmobeauty-led.png`** (Tecnologia & Dermocosméticos):
   - Fototerapia com Máscara LED, Cosmobeauty antiOxC e Peeling de Peptídeos NAD+ Concentrado de Ouro Líquido.
   - Utilizada na seção de **Resultados & Cabine**.

---

## ⚡ Sincronização das Imagens (Passo Rápido de 1 Clique)

Os arquivos originais enviados encontram-se preservados na pasta de upload do sistema.

Para copiá-los de imediato para dentro da estrutura do site (`public/images/` e `images/`):

👉 **Dê um duplo-clique no arquivo [`copy-images.bat`](file:///c:/Users/Win11/Downloads/template/copy-images.bat)** (Windows)  
*Ou abra o PowerShell na pasta e execute: `.\setup-images.ps1`*

Após a execução, todas as 4 imagens estarão salvas localmente nas pastas do projeto e renderizarão de imediato no navegador.

---

## 🛡️ Tratamento Visual de Fallback (Sem Imagem Quebrada)

- Se as imagens ainda não tiverem sido sincronizadas na pasta, o site ativa automaticamente um **tratamento de erro visual discreto**:
  - Em vez do ícone de imagem quebrada do navegador, é renderizado um card editorial sofisticado com monograma dourado "KR", títulos refinados e dimensões idênticas, preservando a harmonia da primeira dobra e o cartão "9 Anos".
- Não há caminhos absolutos do tipo `C:\Users\...` no HTML, nem risco de bloqueio de segurança local.

---

## ⚙️ Configurações Editáveis (`config.js`)

Todas as informações variáveis da clínica estão centralizadas no arquivo [`config.js`](file:///c:/Users/Win11/Downloads/template/config.js):
- WhatsApp e mensagem pré-formatada;
- Usuário do Instagram;
- Endereço e horários de atendimento;
- Catálogo de procedimentos e diferenciais.

---

## 🚀 Publicação na Vercel

O projeto está 100% preparado para a Vercel com o arquivo [`vercel.json`](file:///c:/Users/Win11/Downloads/template/vercel.json).
Para publicar:
1. Suba esta pasta para um repositório GitHub;
2. Importe o projeto no painel da [Vercel](https://vercel.com);
3. O deploy estático será concluído em segundos com URLs limpas e cache configurado.
