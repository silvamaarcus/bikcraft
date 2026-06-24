# Bikcraft - E-commerce & Catálogo de Bicicletas Premium e Seguros

Este projeto é uma plataforma web completa para a **Bikcraft**, uma marca fictícia de bicicletas elétricas e artesanais de alta performance, além de serviços de seguros. A aplicação permite aos usuários explorar o catálogo de bicicletas, selecionar modelos detalhados, solicitar orçamentos personalizados integrados com validação de CEP e visualizar termos de uso estruturados.

Desenvolvido utilizando as melhores práticas do mercado, o projeto serve como um excelente guia prático para desenvolvedores juniors e plenos compreenderem a estrutura moderna do **Next.js (App Router)**, boas práticas de **Clean Code** e a aplicação dos princípios **SOLID**.

---

## 🛠️ Tecnologias e Dependências

O projeto utiliza um ecossistema de bibliotecas modernas para garantir performance, tipagem estática segura, validação robusta e excelente experiência de desenvolvimento.

### Dependências de Produção (Core & UI)

| Dependência                  | Função / Responsabilidade                 | Por que utilizamos?                                                                                                                        |
| :--------------------------- | :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js (v16.2)**          | Framework React principal.                | Fornece Server-Side Rendering (SSR), otimização de imagens, fontes e roteamento baseado em arquivos (App Router).                          |
| **React & React DOM (v19)**  | Biblioteca de UI declarativa.             | Base da interface do usuário do projeto.                                                                                                   |
| **Axios**                    | Cliente HTTP baseado em promessas.        | Facilita a comunicação com APIs externas e locais, permitindo configurar instâncias base com facilidade.                                   |
| **@tanstack/react-query**    | Gerenciamento de estado assíncrono.       | Controla requisições, cache, sincronização e atualização de dados vindos do servidor, eliminando a necessidade de `useEffect` redundantes. |
| **React Hook Form**          | Gerenciamento de formulários.             | Otimiza a performance de formulários complexos (como o de orçamento), minimizando re-renderizações desnecessárias da página.               |
| **Zod**                      | Validação de esquemas e dados.            | Garante tipagem estática e validação em tempo de execução dos dados inseridos pelo usuário nos formulários.                                |
| **@hookform/resolvers**      | Integração entre formulários e validação. | Conecta os esquemas de validação do Zod diretamente ao React Hook Form.                                                                    |
| **cpf-cnpj-validator**       | Validação de documentos brasileiros.      | Garante que o CPF ou CNPJ preenchido no formulário de orçamento seja matematicamente válido.                                               |
| **lucide-react**             | Biblioteca de ícones vetoriais.           | Disponibiliza ícones modernos em formato SVG altamente customizáveis como componentes React.                                               |
| **next-themes**              | Gerenciador de temas (Light/Dark).        | Facilita a implementação e alternância de temas visuais na aplicação.                                                                      |
| **clsx & tailwind-merge**    | Utilitários de classes CSS.               | Permitem condicionalmente concatenar e mesclar classes do Tailwind CSS sem conflitos de especificidade.                                    |
| **class-variance-authority** | Criação de variantes de componentes.      | Facilita a criação de componentes de UI reutilizáveis com variações de estilos controladas por propriedades.                               |
| **sonner**                   | Notificações do sistema (Toasts).         | Exibe alertas flutuantes e elegantes para feedbacks de sucesso ou erro nas ações do usuário.                                               |
| **query-string**             | Manipulação de query parameters.          | Utilitário leve para converter objetos em strings de consulta de URL e vice-versa.                                                         |

### Dependências de Desenvolvimento (DevDependencies)

- **TypeScript**: Adiciona tipagem estática ao código, prevenindo bugs em tempo de desenvolvimento.
- **Tailwind CSS (v4)**: Framework CSS utilitário para estilização rápida e responsiva diretamente no HTML/TSX.
- **ESLint & Prettier**: Ferramentas de análise estática e formatação automática do código, garantindo conformidade com o guia de estilo definido.
- **Husky & Lint-staged**: Configura ganchos (hooks) de Git para rodar o lint e a formatação automaticamente antes de permitir a conclusão de um commit.
- **json-server**: Cria uma API REST mockada local a partir de um arquivo JSON (`db.json`) para simular chamadas de backend reais de forma simples.

---

## 📂 Arquitetura do Projeto (Next.js App Router)

A arquitetura do projeto segue o padrão estrutural do **Next.js App Router**, organizando arquivos com foco em modularidade, separação de conceitos e facilidade de manutenção.

```text
/
├── app/                      # Pasta principal da aplicação (App Router)
│   ├── (home)/               # Grupo de rotas da página inicial (/)
│   ├── bikes/                # Rota /bikes (Catálogo e detalhes)
│   │   └── [id]/             # Rota dinâmica /bikes/[id] (Detalhe da bicicleta)
│   ├── budget/               # Rota /budget (Página de orçamento)
│   ├── contact/              # Rota /contact (Página de contato)
│   ├── insurance/            # Rota /insurance (Página de seguros)
│   ├── terms/                # Rota /terms (Página de termos de uso)
│   │
│   # Subpastas Privadas (Arquitetura Interna)
│   ├── _api/                 # Chamadas de API e hooks de dados (React Query)
│   ├── _components/          # Componentes reutilizáveis globais da aplicação
│   ├── _forms/               # Esquemas Zod e hooks dedicados a formulários
│   ├── _helpers/             # Funções utilitárias auxiliares de negócio
│   ├── _lib/                 # Configurações de bibliotecas externas (Axios, etc.)
│   ├── _providers/           # Provedores de contexto (React Query, Temas)
│   ├── _types/               # Definições globais de tipos do TypeScript
│   ├── _utils/               # Utilitários gerais e helpers puros de código
│   │
│   ├── globals.css           # Estilização global e variáveis Tailwind
│   └── layout.tsx            # Layout raiz (Root Layout) da aplicação
│
├── public/                   # Arquivos estáticos públicos (Imagens, SVG, etc.)
├── .env.development          # Variáveis de ambiente para desenvolvimento local
├── .env.production           # Variáveis de ambiente para produção (Vercel)
├── .env.example              # Exemplo de configuração de variáveis de ambiente
├── db.json                   # Banco de dados local mockado para o json-server
├── package.json              # Configurações de scripts e dependências do Node
└── tsconfig.json             # Configuração do compilador TypeScript
```

### 🎓 Convenções de Pastas no Next.js

O Next.js utiliza o sistema de arquivos para definir rotas. Para organizar o projeto de forma limpa, são aplicadas três convenções de nomenclatura de pastas:

#### 1. Pastas Privadas (Prefixo com Underline: `_components`, `_api`, etc.)

Ao colocar um underline `_` antes do nome de uma pasta (ex: `app/_components/`), você informa ao Next.js que **esta pasta deve ser ignorada pelo sistema de roteamento**.

- **Objetivo**: Colocar códigos de suporte (componentes compartilhados, instâncias de bibliotecas, arquivos de tipos) diretamente dentro do diretório `app`, mantendo o código altamente coeso e próximo do seu contexto de uso, sem gerar rotas acidentais na URL.

#### 2. Grupos de Rotas (Envolvidas in Parênteses: `(home)`)

Ao envolver o nome de uma pasta entre parênteses (ex: `app/(home)/`), você cria um **Grupo de Rotas**. O Next.js agrupa esses arquivos logicamente, mas **ignora o nome da pasta na URL final**.

- **Objetivo**: Organizar projetos em seções lógicas ou compartilhar layouts distintos. No nosso caso, a rota `/app/(home)/page.tsx` será acessada diretamente pelo caminho raiz `/` no navegador.

#### 3. Rotas Dinâmicas (Envolvidas em Colchetes: `[id]`)

Ao colocar o nome de uma pasta entre colchetes (ex: `app/bikes/[id]/`), você cria uma **Rota Dinâmica**.

- **Objetivo**: Mapear URLs variáveis para um único arquivo de página. Por exemplo, acessar `http://localhost:3000/bikes/nebula` ou `http://localhost:3000/bikes/magic` fará com que o Next.js renderize o componente de página dentro de `[id]`, expondo o valor `"nebula"` ou `"magic"` através de parâmetros (`params.id`).

---

## 💎 Clean Code & Princípios SOLID Aplicados

Escrever código limpo significa escrever códigos que são fáceis de ler, testar e manter. Neste projeto, aplicamos as melhores práticas através dos princípios **SOLID**:

### **S - Single Responsibility Principle (Princípio da Responsabilidade Única)**

Cada módulo, função ou componente deve fazer apenas uma coisa e fazê-la bem.

- **Exemplo**: O formulário de orçamento não é responsável por realizar a requisição HTTP diretamente, nem por validar os dados brutos. A validação fica isolada no esquema Zod (`_forms/schemas`), a lógica de requisição assíncrona fica no `_api`, e o componente visual apenas orquestra o estado visual da tela.

### **O - Open/Closed Principle (Princípio Aberto/Fechado)**

Componentes devem estar abertos para extensão, mas fechados para modificação.

- **Exemplo**: O componente `TermItem` foi projetado de forma extensível utilizando a composição do React (`children`). Se novos parágrafos ou elementos estilizados precisarem ser adicionados a um termo, não é necessário modificar a estrutura interna do `TermItem`; basta passar novos componentes filhos (`TermItemParagraph`) na chamada.

### **L - Liskov Substitution Principle (Princípio da Substituição de Liskov)**

Subclasses ou componentes que implementam interfaces devem poder substituir seus ancestrais sem quebrar a aplicação.

- **Exemplo**: Tipagens de propriedades de componentes (como `TitleProps` ou `TermItemProps`) são declaradas de forma rígida e clara em TypeScript, garantindo que qualquer variação de propriedade repassada respeite estritamente o contrato e não cause erros inesperados em tempo de execução.

### **I - Interface Segregation Principle (Princípio da Segregação de Interfaces)**

É melhor ter várias interfaces específicas do que uma interface geral e robusta demais.

- **Exemplo**: Em vez de passar um objeto gigantesco com dados mistos de configuração para todos os componentes de termos de uso, separamos as interfaces do componente contêiner (`TermItemProps`) e do parágrafo individual (`TermItemParagraphProps`), expondo apenas o estritamente necessário para cada um.

### **D - Dependency Inversion Principle (Princípio da Inversão de Dependência)**

Dependa de abstrações, não de implementações concretas.

- **Exemplo**: As chamadas HTTP não são feitas chamando `axios.get` diretamente nos componentes. Criamos instâncias de clientes abstraídos (`api` e `viaCep` dentro de `_lib/axios.ts`). Isso permite que, caso a URL base ou a biblioteca cliente mude no futuro, a alteração seja feita em um único arquivo de configuração, sem impactar os componentes visuais.

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar o projeto no seu ambiente local:

### Pré-requisitos

Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 1. Clonar o Repositório

Abra o terminal e execute o comando abaixo para clonar o projeto:

```bash
git clone https://github.com/silvamaarcus/bikcraft.git
```

### 2. Navegar para a Pasta do Projeto

```bash
cd bikcraft
```

### 3. Instalar as Dependências

Execute o comando de instalação de pacotes:

```bash
npm install
```

### 4. Configurar as Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurar a URL da API em diferentes ambientes (desenvolvimento e produção).

#### Criar os arquivos .env

Crie dois arquivos de ambiente na raiz do projeto:

**`.env.development`** (para desenvolvimento local):

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**`.env.production`** (para produção):

```env
NEXT_PUBLIC_API_URL=https://bikcraft-api-five.vercel.app
```

> 💡 **Dica**: Um arquivo `.env.example` está disponível como referência. Basta copiar e ajustar os valores:
>
> ```bash
> cp .env.example .env.development
> ```

#### Como o Next.js usa os arquivos .env:

- **`npm run dev`** → carrega automaticamente `.env.development`
- **`npm run build` e `npm start`** → carrega automaticamente `.env.production`

### 5. Executar o Servidor de Banco de Dados Mockado (Backend)

O projeto consome dados locais armazenados no arquivo `db.json`. Para rodar essa API mockada na porta `3001` (porta configurada no `.env.development`), execute em um terminal separado:

```bash
npx json-server --watch db.json --port 3001
```

### 6. Executar o Servidor de Desenvolvimento (Frontend)

Em outro terminal (na raiz do projeto), execute o servidor de desenvolvimento do Next.js:

```bash
npm run dev
```

### 7. Acessar a Aplicação

Abra o seu navegador e acesse o endereço:

```text
http://localhost:3000
```

O servidor de desenvolvimento do Next.js roda por padrão na porta `3000` e a API mockada de suporte na porta `3001`. Ambos precisam estar rodando simultaneamente para que a aplicação carregue os dados das bicicletas e envie os formulários com sucesso.
