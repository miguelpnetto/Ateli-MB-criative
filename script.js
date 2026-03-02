// --- CONFIGURAÇÃO DOS PRODUTOS ---
// Adicione ou edite seus produtos aqui
const produtos = [
    {
        id: 1,
        nome: "Par de Brincos Articulados Oceano",
        preco: 40.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-articulados-01.jpg" // Substitua pelo link da sua foto real
    },
    {
        id: 2,
        nome: "Par de Brincos Articulados Coração com Losango",
        preco: 35.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-articulados-02.jpg"
    },
    {
        id: 3,
        nome: "Par de Brincos Articulados Concha",
        preco: 40.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-articulados-03.jpg"
    },
    {
        id: 4,
        nome: "Par de Brincos Articulados Esquilo",
        preco: 40.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-articulados-04.jpg"
    },
    {
        id: 5,
        nome: "Par de Brincos Articulados Gato",
        preco: 30.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-articulados-05.jpg"
    },
    {
        id: 6,
        nome: "Par de Brincos Floral",
        preco: 40.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-biojoia-01.jpg"
    },
    {
        id: 7,
        nome: "Par de Brincos Gota",
        preco: 20.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-gota-01.jpg"
    },
    {
        id: 8,
        nome: "Par de Brincos Pet",
        preco: 20.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "brinco"],
        img: "img/brincos-pet-01.jpg"
    },
    {
        id: 9,
        nome: "Chaveiro Mandala Personalizado Amarelo",
        preco: 25.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-mandala-01.jpg"
    },
    {
        id: 10,
        nome: "Chaveiro Mandala Personalizado Lilás",
        preco: 25.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-mandala-02.jpg"
    },
    {
        id: 11,
        nome: "Chaveiro Mandala Personalizado Vermelho",
        preco: 25.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-mandala-03.jpg"
    },
    {
        id: 12,
        nome: "Chaveiro Mandala Personalizado Azul",
        preco: 25.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-mandala-04.jpg"
    },
    {
        id: 13,
        nome: "Chaveiro Personalizado Otaku",
        preco: 35.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-otaku-01.jpg"
    },
    {
        id: 14,
        nome: "Chaveiro Religioso",
        preco: 20.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "chaveiro"],
        img: "img/chaveiro-religioso-01.jpg"
    },
    {
        id: 15,
        nome: "Letra Avulsa Personalizada Roxo com Ouro",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-01.jpg"
    },
    {
        id: 16,
        nome: "Letra Avulsa Personalizada Preto com Ouro",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-02.jpg"
    },
    {
        id: 17,
        nome: "Letra Avulsa Personalizada Lilás com Ouro",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-03.jpg"
    },
    {
        id: 18,
        nome: "Letra Avulsa Personalizada Marrom com Ouro",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-04.jpg"
    },
    {
        id: 19,
        nome: "Letra Avulsa Personalizada Rosa",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-05.jpg"
    },
    {
        id: 20,
        nome: "Letra Avulsa Personalizada Marrom com Corações Amarelos",
        preco: 16.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-06.jpg"
    },
    {
        id: 21,
        nome: "Letra Avulsa Personalizada Vermelho com Cores Sortidas ",
        preco: 15.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-07.jpg"
    },
    {
        id: 22,
        nome: "Letra Avulsa Personalizada Azul com Detalhes",
        preco: 17.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-08.jpg"
    },
    {
        id: 23,
        nome: "Letra Avulsa Personalizada Dourado com Ouro e Glitter",
        preco: 17.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-09.jpg"
    },
    {
        id: 24,
        nome: "Letra Avulsa Personalizada Laranja com Detalhes em Vermelho",
        preco: 16.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-10.jpg"
    },
    {
        id: 25,
        nome: "Letra Avulsa Personalizada Preto com Brilhos",
        preco: 16.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-11.jpg"
    },
    {
        id: 26,
        nome: "Letra Avulsa Personalizada Rosa com Ouro",
        preco: 16.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "letra"],
        img: "img/letra-avulsa-12.jpg"
    },
    {
        id: 27,
        nome: "Pingente Pet - Patinha",
        preco: 10.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "pingente"],
        img: "img/pingente-pet-01.jpg"
    },
    {
        id: 28,
        nome: "Porta Copos Personalizado 01",
        preco: 50.00,
        prazo: "4 dias úteis",
        tipo: ["novidade", "porta-copo"],
        img: "img/porta-copo-personalizado-01.jpg"
    },
    {
        id: 29,
        nome: "Porta Copos Personalizado 02",
        preco: 50.00,
        prazo: "4 dias úteis",
        tipo: ["novidade", "porta-copo"],
        img: "img/porta-copo-personalizado-02.jpg"
    },
    {
        id: 30,
        nome: "Porta Copos Personalizado gatos Yin-Yang",
        preco: 50.00,
        prazo: "4 dias úteis",
        tipo: ["novidade", "porta-copo"],
        img: "img/porta-copos-personalizados-03.jpg"
    },
    {
        id: 31,
        nome: "Porta Copos Personalizado Azul com Ouro",
        preco: 40.00,
        prazo: "3 dias úteis",
        tipo: ["novidade", "porta-copo"],
        img: "img/porta-copos-personalizados-04.jpg"
    }
];

let carrinho = [];

// --- FUNÇÕES DO SITE ---

// Renderizar produtos na tela
function renderProducts(filtro = 'todos') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const produtosFiltrados = filtro === 'todos'
        ? produtos
        : produtos.filter(p => p.tipo.includes(filtro));

    produtosFiltrados.forEach(produto => {
        // Define o badge (etiqueta) se houver
        let badge = '';
        produto.tipo.forEach(t => {
            if (t === 'novidade') {
                badge += '<span class="badge badge-novo">Novidade ✨</span>';
            } else if (t === 'oferta') {
                badge += '<span class="badge badge-oferta">Oferta 🔥</span>';
            } else if (t === 'porta-copo') {
                badge += '<span class="badge badge-porta-copo">Porta-Copo </span>';
            } else if (t === 'brinco') {
                badge += '<span class="badge badge-brinco">Brincos 💎</span>';
            } else if (t === 'chaveiro') {
                badge += '<span class="badge badge-chaveiro">Chaveiro 🔑</span>';
            } else if (t === 'letra') {
                badge += '<span class="badge badge-letra">Letra Personalizada 🔠</span>';
            } else if (t === 'pingente') {
                badge += '<span class="badge badge-pingente">Pingente 💎</span>';
            }
        })


        const card = `
    <div class="card">
        <div class="img-container">
            <img src="${produto.img}" alt="${produto.nome}" class="card-img" decoding="async" onclick="verImagem('${produto.img}', '${produto.nome}')">
        </div>
        
        <div class="card-body">
            ${badge}
            <h3 class="card-title">${produto.nome}</h3>
            <p class="card-prazo">🕒 ${produto.prazo}</p>
            
            <!-- Footer com duas linhas -->
            <div class="card-footer" style="flex-direction: column; gap: 12px; margin-top: auto;">
                
                <!-- Linha 1: Preço e Quantidade -->
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                    
                    <div style="display: flex; align-items: center; gap: 8px; border: 1px solid #eee; border-radius: 20px; padding: 4px 10px; background: #fff;">
                        <button onclick="mudarQtd(${produto.id}, -1)" style="background:none; border:none; cursor:pointer; color:#666; font-weight:bold; font-size:16px;">-</button>
                        <span id="qtd-${produto.id}" style="font-weight:600; min-width:14px; text-align:center;">1</span>
                        <button onclick="mudarQtd(${produto.id}, 1)" style="background:none; border:none; cursor:pointer; color:var(--cor-primaria); font-weight:bold; font-size:16px;">+</button>
                    </div>
                </div>

                <!-- Linha 2: Botão Largo -->
                <button class="add-btn" 
                        style="width: 100%; height: 42px; border-radius: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 8px;" 
                        onclick="addToCart(${produto.id})">
                    Adicionar <span class="material-icons-round" style="font-size: 18px;">shopping_cart</span>
                </button>
            </div>
        </div>
    </div>
`;

        container.innerHTML += card;
    });
}

function toggleMenu() {
    const menu = document.getElementById('filters-menu');
    const overlay = document.getElementById('filters-overlay');
    
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Modifique sua função de filtro para fechar o menu após escolher uma categoria
function filterProducts(tipo) {
    // Código que você já tem...
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Se foi um clique direto no botão
    if(event.target.classList.contains('filter-btn')) {
        event.target.classList.add('active');
    }

    renderProducts(tipo);
    
    // Fecha o menu se estiver no celular
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

// Filtrar produtos pelos botões
function filterProducts(tipo) {
    // Atualiza visual dos botões
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderProducts(tipo);
}

// Adicionar ao carrinho
function addToCart(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    updateCart();

    // Feedback visual simples
    const btn = event.currentTarget;
    const originalColor = btn.style.backgroundColor;
    btn.style.backgroundColor = '#25D366';
    setTimeout(() => btn.style.backgroundColor = '', 300);
}

// Atualizar carrinho (contagem e visual)
function updateCart() {
    document.getElementById('cart-count').innerText = carrinho.length;

    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #888; margin-top: 20px;">Seu carrinho está vazio.</p>';
        totalElement.innerText = 'R$ 0,00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.nome}</strong><br>
                    <small>R$ ${item.preco.toFixed(2).replace('.', ',')}</small>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
    });

    totalElement.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Remover item do carrinho
function removeFromCart(index) {
    carrinho.splice(index, 1);
    updateCart();
}

// Abrir/Fechar Carrinho
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const overlay = document.getElementById('cart-overlay');

    if (modal.classList.contains('open')) {
        modal.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        modal.classList.add('open');
        overlay.style.display = 'block';
    }
}

// Finalizar no WhatsApp
function checkoutWhatsApp() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    // SEU NÚMERO AQUI (com DDD 55 na frente)
    const numeroWhatsApp = "5581997192611";

    let mensagem = "*Olá! Gostaria de fazer um pedido de peças em Resina:*\n\n";
    let total = 0;

    carrinho.forEach(item => {
        mensagem += `▪️ ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')} (Prazo: ${item.prazo})\n`;
        total += item.preco;
    });

    mensagem += `\n*💰 Total Estimado: R$ ${total.toFixed(2).replace('.', ',')}*`;
    mensagem += "\n\nPodemos combinar o pagamento e a entrega?";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Funções novas para abrir e fechar
function verImagem(url, nome) {
    document.getElementById('lightbox-img').src = url;
    document.getElementById('lightbox-caption').innerText = nome;
    document.getElementById('lightbox').style.display = 'flex';
}

function fecharImagem() {
    document.getElementById('lightbox').style.display = 'none';
}

// Função para aumentar/diminuir quantidade no card antes de adicionar
function mudarQtd(id, delta) {
    const span = document.getElementById(`qtd-${id}`);
    let qtdAtual = parseInt(span.innerText);
    let novaQtd = qtdAtual + delta;

    if (novaQtd < 1) novaQtd = 1; // Não deixa ser menor que 1

    span.innerText = novaQtd;
}

// Função Atualizada de Adicionar ao Carrinho (com quantidade e mensagem)
function addToCart(id) {
    const produtoOriginal = produtos.find(p => p.id === id);
    const qtdSelecionada = parseInt(document.getElementById(`qtd-${id}`).innerText);

    // Verifica se já tem no carrinho
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += qtdSelecionada;
    } else {
        // Cria uma cópia do produto para não afetar o original e adiciona qtd
        carrinho.push({ ...produtoOriginal, quantidade: qtdSelecionada });
    }

    updateCart();

    // Reseta o contador visual para 1
    document.getElementById(`qtd-${id}`).innerText = "1";

    // Mostra a mensagem de sucesso
    mostrarMensagem(`+ ${qtdSelecionada}x ${produtoOriginal.nome} adicionado!`);
}

// Função para mostrar a mensagem flutuante (Toast)
function mostrarMensagem(texto) {
    // Cria o elemento da mensagem se não existir
    let msgDiv = document.getElementById('msg-toast');
    if (!msgDiv) {
        msgDiv = document.createElement('div');
        msgDiv.id = 'msg-toast';
        msgDiv.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background-color: #333; color: white; padding: 12px 24px; border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 3000; font-weight: bold;
            opacity: 0; transition: opacity 0.3s, top 0.3s;
        `;
        document.body.appendChild(msgDiv);
    }

    msgDiv.innerText = texto;
    msgDiv.style.opacity = '1';
    msgDiv.style.top = '30px'; // Pequeno movimento para baixo

    // Esconde depois de 3 segundos
    setTimeout(() => {
        msgDiv.style.opacity = '0';
        msgDiv.style.top = '20px';
    }, 3000);
}

function updateCart() {
    // Contagem total de itens (soma das quantidades)
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    document.getElementById('cart-count').innerText = totalItens;

    const itemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('cart-total');

    if (carrinho.length === 0) {
        itemsDiv.innerHTML = '<p style="text-align: center; color: #888; margin-top: 20px;">Vazio</p>';
        totalDiv.innerText = 'R$ 0,00';
        return;
    }

    itemsDiv.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        itemsDiv.innerHTML += `
            <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;">
                <div>
                    <strong>${item.quantidade}x ${item.nome}</strong><br>
                    <small>R$ ${subtotal.toFixed(2).replace('.', ',')}</small>
                </div>
                <button onclick="removeFromCart(${index})" style="color:#ff4444; border:none; background:none; cursor:pointer;">Remover</button>
            </div>`;
    });
    totalDiv.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Fechar modal ao clicar fora
document.getElementById('cart-overlay').addEventListener('click', toggleCart);

// Inicializar
renderProducts();

