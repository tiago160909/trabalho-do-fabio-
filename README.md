# Projeto: Do Zero ao Deploy — Meu Spotify

Resumo rápido

Projeto front-end simples (HTML, CSS, JS) que simula uma galeria de músicas com design inspirado no Spotify. Contém cards responsivos com botão de play e interações básicas.

Estrutura básica

- `index.html` — HTML base
- `style.css` — Estilos (tema Spotify)
- `app.js` — Renderização das músicas e interações
- `explicacao.txt` — Conceitos: Git, branch, deploy, CI/CD

Git — comandos recomendados (PowerShell no Windows)

1. Inicializar repositório (se ainda não tiver):

   git init
   git add .
   git commit -m "HTML base criado"

2. Criar e mudar para a branch de desenvolvimento:

   git checkout -b desenvolvimento

3. Fazer commits organizados conforme o progresso:

   git add index.html
   git commit -m "HTML base criado"

   git add style.css
   git commit -m "CSS estilo Spotify adicionado"

   git add app.js
   git commit -m "JS interativo implementado"

4. Conectar ao repositório remoto (exemplo GitHub):

   git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
   git push -u origin desenvolvimento

Observações: substitua `<seu-usuario>` e `<seu-repo>` pelo seu usuário e repositório reais.

Deploy na Vercel (passos rápidos)

1. Acesse https://vercel.com e faça login com GitHub.
2. Clique em "Add New → Project" e importe seu repositório.
3. Ao configurar, selecione a branch `desenvolvimento` como Production Branch (se quiser que esta branch publique automaticamente).
4. Clique em Deploy.
5. Após o build, a Vercel fornecerá o link público do site.

CI/CD — como testar

- A Vercel executa um build automático sempre que houver push na branch configurada.
- Para testar, faça uma pequena alteração (por exemplo, alterar a cor de fundo em `style.css`), commit e push:

  git add style.css; git commit -m "Teste: alterar fundo"; git push origin desenvolvimento

- Aguarde o build na Vercel (normalmente 1–2 minutos) e verifique a atualização pública.

Boas práticas de versionamento

- Use mensagens de commit claras e atômicas.
- Faça PR/Merge para integrar `desenvolvimento` em `main` quando pronto para produção.
- Mantenha arquivos sensíveis fora do repositório (use `.gitignore`).

Dicas rápidas de melhoria

- Substituir as imagens `picsum.photos` por capas reais no diretório `assets/`.
- Adicionar reprodução real usando a API Web Audio/HTMLAudioElement.
- Incluir testes simples e lint (ESLint) antes do CI.

Pronto — `README.md` criado. Deseja que eu também adicione um arquivo `.gitignore` e um `license`?  
