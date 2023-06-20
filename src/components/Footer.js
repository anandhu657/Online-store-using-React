import React from 'react'

function Footer() {
    return (
        <footer className='navbar bg-dark'>
            <div className='container-fluid'>
                <div className='mx-auto'>
                    <p className='m-0 text-light'>
                        &copy; EStore {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
