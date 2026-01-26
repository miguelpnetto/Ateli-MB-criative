// --- CONFIGURAÇÃO DOS PRODUTOS ---
// Adicione ou edite seus produtos aqui
const produtos = [
    { 
        id: 1, 
        nome: "Chaveiro Letra Inicial", 
        preco: 25.00, 
        prazo: "2 dias úteis", 
        tipo: "novidade", 
        img: "https://via.placeholder.com/300/6C63FF/FFFFFF?text=Letra+Resina" // Substitua pelo link da sua foto real
    },
    { 
        id: 2, 
        nome: "Marca Página Floral", 
        preco: 35.00, 
        prazo: "3 dias úteis", 
        tipo: "oferta", 
        img: "https://via.placeholder.com/300/FF6584/FFFFFF?text=Marca+Pagina" 
    },
    { 
        id: 3, 
        nome: "Porta Copos Personalizado", 
        preco: 40.00, 
        prazo: "5 dias úteis", 
        tipo: "novidade", 
        img: "img/porta-copo-personalizado.jpeg" 
    },
    { 
        id: 4, 
        nome: "Bandeja Decorativa", 
        preco: 180.00, 
        prazo: "7 dias úteis", 
        tipo: "novidade", 
        img: "https://via.placeholder.com/300/BA68C8/FFFFFF?text=Bandeja" 
    },
    { 
        id: 5, 
        nome: "Dominó Personalizado", 
        preco: 150.00, 
        prazo: "10 dias úteis", 
        tipo: "normal", 
        img: "https://via.placeholder.com/300/4FC3F7/FFFFFF?text=Domino" 
    },
    { 
        id: 6, 
        nome: "Placa Pix com QR Code", 
        preco: 55.00, 
        prazo: "4 dias úteis", 
        tipo: "oferta", 
        img: "https://via.placeholder.com/300/FFD54F/FFFFFF?text=Placa+Pix" 
    },
    { 
        id: 7, 
        nome: "Caneta Personalizada", 
        preco: 20.00, 
        prazo: "2 dias úteis", 
        tipo: "normal", 
        img: "https://via.placeholder.com/300/A1887F/FFFFFF?text=Caneta" 
    },
    { 
        id: 8, 
        nome: "Pingente Pet", 
        preco: 15.00, 
        prazo: "2 dias úteis", 
        tipo: "novidade", 
        img: "https://via.placeholder.com/300/90A4AE/FFFFFF?text=Pingente+Pet" 
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
        : produtos.filter(p => p.tipo === filtro);

    produtosFiltrados.forEach(produto => {
        // Define o badge (etiqueta) se houver
        let badge = '';
        if (produto.tipo === 'novidade') badge = '<span class="badge badge-novo">Novidade ✨</span>';
        if (produto.tipo === 'oferta') badge = '<span class="badge badge-oferta">Oferta 🔥</span>';

        const card = `
    <div class="card">
        <div class="img-container">
            <img src="${produto.img}" alt="${produto.nome}" class="card-img" onclick="verImagem('${produto.img}', '${produto.nome}')">
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
    
    if(carrinho.length === 0) {
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

