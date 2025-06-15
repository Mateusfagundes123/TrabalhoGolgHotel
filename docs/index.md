---
layout: home
title: Gold Hotel
---

<p align="center">
  <img src="/logo.png" alt="Logo do Gold Hotel" width="200">
</p>

# Documento de Visão

**Nome do Projeto:** Gold Hotel  
**Versão:** 1.0  
**Data:** 18/06/2025  
**Integrantes:** Gabriel Camini, João Giliolii, Mateus Tomczak Fagundes

## 1. Introdução

O Gold Hotel necessita de um sistema de gestão eficiente para controlar todas as operações relacionadas aos quartos, reservas, hóspedes, pagamentos e serviços adicionais.

Os quartos do hotel são classificados em três categorias: **Standard**, **Luxo** e **Suíte Master**. Cada quarto possui informações específicas, como número, capacidade de ocupação, status (disponível, ocupado, em manutenção, entre outros) e o valor da diária correspondente à sua categoria.

Os hóspedes devem realizar um cadastro no sistema, fornecendo dados pessoais como nome completo, CPF, data de nascimento, telefone, e-mail e uma senha de acesso para utilizar o portal online. Além disso, é possível incluir acompanhantes vinculados à reserva do hóspede principal.

O sistema será responsável por gerenciar as reservas, permitindo verificar a disponibilidade dos quartos com base nas datas desejadas, registrar as datas de entrada e saída e possibilitar alterações ou cancelamentos conforme as políticas do hotel.

Os pagamentos das reservas poderão ser efetuados por meio de **cartão de crédito ou débito, PIX ou boleto bancário**. O sistema controlará o status de cada pagamento, classificando-os como pagos, parciais ou pendentes, além de gerar automaticamente faturas e recibos para os hóspedes.

Além da hospedagem, o hotel oferece serviços extras, como **café da manhã, lavanderia e passeios turísticos**. Esses serviços poderão ser adicionados à fatura do hóspede e pagos juntamente com o valor da estadia.

O sistema também contará com um **portal online**, acessível pelos hóspedes, onde será possível acompanhar reservas realizadas, visualizar o status dos pagamentos e solicitar ou verificar os serviços.

### 1.1 Objetivo

Liste os principais objetivos do projeto, descrevendo o que se pretende alcançar com o desenvolvimento e implementação do software.

### 1.2 Escopo

Este projeto visa desenvolver [insira uma breve descrição do sistema ou software a ser desenvolvido], que terá como finalidade [insira o objetivo principal do sistema]. O sistema se destina a [insira os usuários ou stakeholders principais].

### 1.3 Definições, Acrônimos e Abreviações

- GH: Gold Hotel

### 1.4 Público-alvo

Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software **Gold Hotel**.  
Exemplos: Turistas, migrantes, viajantes, pessoas maiores de idade.

## 2. Descrição do Projeto

### 2.1 Visão Geral do Projeto

O objetivo deste documento é fornecer uma visão geral do projeto **Gold Hotel**. Ele descreve a finalidade do projeto, os principais stakeholders envolvidos, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema.

#### 2.1.1 Canvas do Projeto

[Inserir o Canvas do Projeto aqui]

### 2.2 Stakeholders

- **Gabriel Camini** – [Descrição do papel no projeto]
- **João Giliolii** – [Descrição do papel no projeto]
- **Mateus Tomczak Fagundes** – [Descrição do papel no projeto]

## 3. Principais Recursos e Funcionalidades

### 3.1 Requisitos Funcionais

#### 1. Gestão de Quartos

- RF01. Cadastro de quartos com número, capacidade, status e valor da diária.
- RF02. Classificação dos quartos em: Standard, Luxo e Suíte Master.
- RF03. Atualização de status do quarto.
- RF04. Consulta por categoria, status ou número.

#### 2. Cadastro de Hóspedes e Acompanhantes

- RF05. Cadastro de hóspedes com dados pessoais.
- RF06. Login com e-mail e senha.
- RF07. Cadastro de acompanhantes vinculados.

#### 3. Gestão de Reservas

- RF08. Criação de reservas com datas de entrada e saída.
- RF09. Verificação de disponibilidade.
- RF10. Alterações e cancelamentos de reservas.
- RF11. Associação de hóspedes e acompanhantes a reservas.

#### 4. Pagamentos e Faturas

- RF12. Registro de pagamentos por cartão, PIX e boleto.
- RF13. Controle de status do pagamento.
- RF14. Geração automática de faturas e recibos.
- RF15. Inclusão de serviços extras na fatura.

#### 5. Serviços Adicionais

- RF16. Oferta de serviços como café da manhã e passeios.
- RF17. Solicitação de serviços durante a estadia.
- RF18. Inclusão dos serviços na fatura.

#### 6. Portal Online para Hóspedes

- RF19. Acesso via login e senha.
- RF20. Visualização de reservas.
- RF21. Acompanhamento de status dos pagamentos.
- RF22. Solicitação de serviços pelo portal.

### 3.2 Requisitos Não Funcionais

#### 1. Usabilidade

- RNF01. Interface intuitiva e responsiva.
- RNF02. Facilidade de uso para usuários leigos.
- RNF03. Mensagens claras de erro e sucesso.

#### 2. Desempenho

- RNF04. Tempo de resposta de até 2 segundos.
- RNF05. Suporte para 500 acessos simultâneos.

#### 3. Segurança

- RNF06. Criptografia dos dados sensíveis.
- RNF07. Autenticação por login/senha.
- RNF08. Uso de HTTPS.
- RNF09. Senhas com hash seguro.

#### 4. Confiabilidade

- RNF10. Backups automáticos diários.
- RNF11. Tolerância a falhas.

#### 5. Compatibilidade

- RNF12. Suporte aos navegadores modernos.
- RNF13. Acesso via dispositivos móveis.

#### 6. Manutenibilidade

- RNF14. Arquitetura modular.
- RNF15. Código com boas práticas.

#### 7. Escalabilidade

- RNF16. Suporte a escalabilidade horizontal.

## 4. Diagrama de Caso de Uso

[Inserir imagem ou diagrama]

### 4.1 Descrição de Casos de Uso

#### Caso de Uso 01 – Cadastro de Hóspede

[Descrição completa do caso de uso]

#### Caso de Uso 02 – Criar Reserva

[Descrição completa do caso de uso]

## 5. Diagrama de Classes

[Inserir imagem ou diagrama]

## 6. Protótipos de Telas

- Tela de Login
- Tela de Cadastro
- Painel do Hóspede
- Tela de Reserva
- Visualização de Pagamento
- Administração de Quartos

## 7. Cronograma e Entrega

| Etapa                      | Início | Término | Responsável |
| -------------------------- | ------ | ------- | ----------- |
| Levantamento de requisitos | 18/06  | 25/06   | Equipe      |
| Desenvolvimento backend    | 26/06  | 31/07   | Mateus      |
| Frontend e testes          | 01/08  | 31/08   | Todos       |

## 8. Riscos e Mitigação

| Risco               | Mitigação              |
| ------------------- | ---------------------- |
| Falta de backend    | Estudar ou terceirizar |
| Atrasos             | Reuniões semanais      |
| Falhas de segurança | Criptografia e HTTPS   |

## 9. Custos e Orçamento

| Item            | Valor (R$) |
| --------------- | ---------- |
| Infraestrutura  | 500        |
| Desenvolvimento | 2.000      |
| Licenciamento   | 300        |
| Total           | **3.150**  |

## 10. Considerações Finais

Este documento fornece uma visão geral do projeto **Gold Hotel**, abordando seu propósito, requisitos, funcionalidades e recursos necessários para garantir seu sucesso. Servirá como guia para todas as etapas do desenvolvimento e validação do sistema.
