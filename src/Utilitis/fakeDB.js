const addToDb = (id) => {
    let courseCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('course-cart');
    if (storedCart) {
        courseCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = courseCart[id];
    if (quantity) {
        courseCart[id] = 1;
    }
    else {
        courseCart[id] = 1;
    }
    localStorage.setItem('course-cart', JSON.stringify(courseCart));
}

const get_stored_data = () => {
    let courseCart = {};
    const storedCart = localStorage.getItem('course-cart');
    if (storedCart) {
        const courseCart = JSON.parse(storedCart);
        return courseCart;
    }
    return { courseCart };
}



const deleteCourseCart = () => {
    localStorage.removeItem('course-cart');
}

export {
    addToDb,
    deleteCourseCart,
    get_stored_data
}