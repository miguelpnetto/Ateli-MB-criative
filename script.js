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
        nome: "Porta Copos Personalidado", 
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
                <img src="${produto.img}" alt="${produto.nome}" class="card-img">
                <div class="card-body">
                    ${badge}
                    <h3 class="card-title">${produto.nome}</h3>
                    <p class="card-prazo">🕒 ${produto.prazo}</p>
                    <div class="card-footer">
                        <span class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                        <button class="add-btn" onclick="addToCart(${produto.id})">
                            <span class="material-icons-round">add</span>
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

// Fechar modal ao clicar fora
document.getElementById('cart-overlay').addEventListener('click', toggleCart);

// Inicializar
renderProducts();

