import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../css/style4.css'; // Import your custom CSS

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [productUpdateSuccess, setProductUpdateSuccess] = useState(false);
    const [productDeleteSuccess, setProductDeleteSuccess] = useState(false);
    const [userUpdateSuccess, setUserUpdateSuccess] = useState(false);
    const [userDeleteSuccess, setUserDeleteSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products/all', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get('/users/all', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchProducts();
        fetchUsers();
    }, []);

    const updateProduct = async (productId, updatedProduct) => {
        try {
            const response = await axios.put(`/update/products/${productId}`, updatedProduct, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProducts(products.map(product => (product.productId === productId ? response.data : product)));
            setProductUpdateSuccess(true);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`/delete/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProducts(products.filter(product => product.productId !== productId));
            setProductDeleteSuccess(true);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const updateUser = async (userId, updatedUser) => {
        try {
            const response = await axios.put(`/update/users/${userId}`, updatedUser, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUsers(users.map(user => (user.userId === userId ? response.data : user)));
            setUserUpdateSuccess(true);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`/delete/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUsers(users.filter(user => user.userId !== userId));
            setUserDeleteSuccess(true);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="admin-dashboard"  style={{backgroundSize: 'cover',width:'100%'}}>
            <h1 className="text-center mb-4 dashheader">Admin Dashboard</h1>
            
            {/* Product Update Success Alert */}
            {productUpdateSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Product updated successfully!
                    <button type="button" className="btn-close" onClick={() => setProductUpdateSuccess(false)}></button>
                </div>
            )}

            {/* Product Delete Success Alert */}
            {productDeleteSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Product deleted successfully!
                    <button type="button" className="btn-close" onClick={() => setProductDeleteSuccess(false)}></button>
                </div>
            )}

            {/* User Update Success Alert */}
            {userUpdateSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    User updated successfully!
                    <button type="button" className="btn-close" onClick={() => setUserUpdateSuccess(false)}></button>
                </div>
            )}

            {/* User Delete Success Alert */}
            {userDeleteSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    User deleted successfully!
                    <button type="button" className="btn-close" onClick={() => setUserDeleteSuccess(false)}></button>
                </div>
            )}

            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center titledash">Products</h2>
                    <table className="table table-hover table-bordered">
                        <thead className=" dashdark">
                            <tr>
                                <th scope="col" className='dashth'>Name</th>
                                <th scope="col" className='dashth'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(product => (
                                <tr key={product.productId}>
                                    <td>{product.productName}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm buttonupdate me-2"
                                            onClick={() => setSelectedProduct(product)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#updateProductModal"
                                        >
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deleteProduct(product.productId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center titledash">Users</h2>
                    <table className="table table-hover table-bordered">
                        <thead className="dashdark">
                            <tr>
                                <th scope="col" className='dashth'>Username</th>
                                <th scope="col" className='dashth'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user => (
                                <tr key={user.userId}>
                                    <td>{user.firstName}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm buttonupdate me-2"
                                            onClick={() => setSelectedUser(user)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#updateUserModal"
                                        >
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deleteUser(user.userId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Update Product Modal */}
            {selectedProduct && (
                <div className="modal fade" id="updateProductModal" tabIndex="-1" aria-labelledby="updateProductModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updateProductModalLabel">Update Product</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    updateProduct(selectedProduct.productId, selectedProduct);
                                    document.getElementById('closeProductModal').click();
                                }}>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            value={selectedProduct.price || ''}
                                            onChange={(e) => setSelectedProduct({...selectedProduct, price: parseFloat(e.target.value)})}
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quantity</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            value={selectedProduct.quantity || ''}
                                            onChange={(e) => setSelectedProduct({...selectedProduct, quantity: parseInt(e.target.value)})}
                                            required 
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-secondary" id="closeProductModal" data-bs-dismiss="modal">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Update User Modal */}
            {selectedUser && (
                <div className="modal fade" id="updateUserModal" tabIndex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updateUserModalLabel">Update User</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    updateUser(selectedUser.userId, selectedUser);
                                    document.getElementById('closeUserModal').click();
                                }}>
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={selectedUser.firstName || ''}
                                            onChange={(e) => setSelectedUser({...selectedUser, firstName: e.target.value})}
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={selectedUser.lastName || ''}
                                            onChange={(e) => setSelectedUser({...selectedUser, lastName: e.target.value})}
                                            required 
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-secondary" id="closeUserModal" data-bs-dismiss="modal">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
