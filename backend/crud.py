from sqlalchemy.orm import Session
from models import User, Product, ProductColor, Cart, CartItem, Order, OrderItem

# CRUD cho User
def create_user(db: Session, username: str, email: str, phone: str, password: str):
    db_user = User(username=username, email=email, phone=phone, password=password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.user_id == user_id).first()

# CRUD cho Product
def create_product(db: Session, product_name: str, description: str, price: float, type: str, detail: str):
    db_product = Product(product_name=product_name, description=description, price=price, type=type, detail=detail)
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.product_id == product_id).first()

def get_all_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Product).offset(skip).limit(limit).all()

# CRUD cho ProductColor
def create_product_color(db: Session, product_id: int, color_name: str, picture_url: str):
    db_product_color = ProductColor(product_id=product_id, color_name=color_name, picture_url=picture_url)
    db.add(db_product_color)
    db.commit()
    db.refresh(db_product_color)
    return db_product_color

def get_product_colors(db: Session, product_id: int):
    return db.query(ProductColor).filter(ProductColor.product_id == product_id).all()

# CRUD cho Cart
def create_cart(db: Session, user_id: int):
    db_cart = Cart(user_id=user_id)
    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)
    return db_cart

def get_cart_by_user_id(db: Session, user_id: int):
    return db.query(Cart).filter(Cart.user_id == user_id).first()

# CRUD cho CartItem
def create_cart_item(db: Session, cart_id: int, product_id: int, quantity: int, color_id: int):
    db_cart_item = CartItem(cart_id=cart_id, product_id=product_id, quantity=quantity, color_id=color_id)
    db.add(db_cart_item)
    db.commit()
    db.refresh(db_cart_item)
    return db_cart_item

def get_cart_items(db: Session, cart_id: int):
    return db.query(CartItem).filter(CartItem.cart_id == cart_id).all()

def update_cart_item_quantity(db: Session, cart_item_id: int, quantity: int):
    db_cart_item = db.query(CartItem).filter(CartItem.cart_item_id == cart_item_id).first()
    if db_cart_item:
        db_cart_item.quantity = quantity
        db.commit()
        db.refresh(db_cart_item)
    return db_cart_item

def delete_cart_item(db: Session, cart_item_id: int):
    db_cart_item = db.query(CartItem).filter(CartItem.cart_item_id == cart_item_id).first()
    if db_cart_item:
        db.delete(db_cart_item)
        db.commit()
    return db_cart_item

# CRUD cho Order
def create_order(db: Session, user_id: int, cart_id: int, payment_method: str):
    cart_items = db.query(CartItem).filter(CartItem.cart_id == cart_id).all()
    total_amount = sum(item.quantity * item.product.price for item in cart_items)
    
    db_order = Order(user_id=user_id, cart_id=cart_id, total_amount=total_amount, payment_method=payment_method)
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    
    for item in cart_items:
        total_price = item.quantity * item.product.price
        create_order_item(db, db_order.order_id, item.product_id, item.quantity, item.product.price, total_price, item.color_id)
    
    return db_order

# CRUD cho OrderItem
def create_order_item(db: Session, order_id: int, product_id: int, quantity: int, unit_price: float, total_price: float, color_id: int):
    db_order_item = OrderItem(order_id=order_id, product_id=product_id, quantity=quantity, unit_price=unit_price, total_price=total_price, color_id=color_id)
    db.add(db_order_item)
    db.commit()
    db.refresh(db_order_item)
    return db_order_item

def get_order_items(db: Session, order_id: int):
    return db.query(OrderItem).filter(OrderItem.order_id == order_id).all()

def get_order_by_id(db: Session, order_id: int):
    return db.query(Order).filter(Order.order_id == order_id).first()