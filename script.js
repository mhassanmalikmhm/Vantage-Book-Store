const books = [
    { id: 1, title: "The Alchemist", price: 18.99, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500" },
    { id: 2, title: "Great Gatsby", price: 25.00, img: "Images/41EOw8dMA-L._SL500_.jpg" },
    { id: 3, title: "Dark Philosophy", price: 30.00, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500" },
    { id: 4, title: "Ancient Art", price: 45.00, img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500" },
    { id: 5, title: "The Raven", price: 12.99, img: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500" },
    { id: 6, title: "Ocean Silence", price: 22.50, img: "Images/51e-iaRaa4L._SL350_.jpg" },
    { id: 7, title: "Modern Architecture", price: 55.00, img: "Images/651E002BF54FB8A0CA9B69A2BA69BF527EAD2154.jpeg" },
    { id: 8, title: "Secret History", price: 19.00, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500" },
    { id: 9, title: "Beyond Time", price: 28.00, img: "Images/D38C2F69C77A0461FE26EAB4B56816E5E0A44D10.jpeg" },
    { id: 10, title: "Lost Cities", price: 35.00, img: "Images/EC2883BE32E31599D52CA0FC2DC94290FBB4857B.jpeg" },
    { id: 11, title: "Eternal Flame", price: 15.00, img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500" },
    { id: 12, title: "Wild Spirit", price: 20.00, img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500" },
    { id: 13, title: "The Architect", price: 42.00, img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=500" },
    { id: 14, title: "Crimson Sky", price: 17.50, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500" },
    { id: 15, title: "Midnight Sun", price: 24.00, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500" },
    { id: 16, title: "Final Chapter", price: 50.00, img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    if (grid) {
        books.forEach(book => {
            const el = document.createElement('div');
            el.className = 'item';
            el.innerHTML = `
                <img src="${book.img}" onclick="openBook(${book.id})" style="cursor:pointer">
                <div class="item-content">
                    <h4>${book.title}</h4>
                    <div class="item-price">$${book.price}</div>
                    <button class="btn-main" style="padding:10px; font-size:0.7rem; margin-top:10px;" onclick="addToCart(${book.id})">ADD TO ARCHIVE</button>
                </div>
            `;
            grid.appendChild(el);
        });
    }
    updateCart();
});

// Navigation, Cart & Update Functions (Same as before but linked correctly)
function openBook(id) { localStorage.setItem('selectedBook', id); window.location.href = 'product.html'; }
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('vantage_cart')) || [];
    cart.push(books.find(b => b.id === id));
    localStorage.setItem('vantage_cart', JSON.stringify(cart));
    updateCart();
}
function updateCart() {
    const count = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('vantage_cart')) || [];
    if(count) count.innerText = cart.length;
}