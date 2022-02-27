import { Col, Input, Select, Row, Form, message, Upload, Modal } from 'antd'
import Head from 'next/head'
import React, { useState } from 'react'
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons'
import Navbar from '../../components/Layout/Navbar'
import { addProduct } from '../../services/lib/productHandler'
import { useRouter } from 'next/router'

const AddProduct = () => {


    const { TextArea } = Input;
    const { Option } = Select;
    const router = useRouter()

    // const [preview, setPreview] = useState(false)
    // const [previewImage, setPreviewImage] = useState()
    // const [fileList, setFileList] = useState([])

    // function getBase64(file) {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => resolve(reader.result);
    //         reader.onerror = error => reject(error);
    //     });
    // }

    // const handleCancel = () => setPreview(false);

    // const handlePreview = async file => {
    //     if (!file.url && !file.preview) {
    //         file.preview = await getBase64(file.originFileObj);
    //     }

    //     setPreview(true)
    //     setPreviewImage(file.url || file.preview)
    // }

    // const handleChange = (e) => setFileList(e.fileList);

    // const uploadButton = (
    //     <div>
    //         <PlusOutlined />
    //         <div style={{ marginTop: 8 }}>Upload</div>
    //         <div>Image</div>
    //     </div>
    // );

    const [formData, setFormData] = useState({
        name: '',
        subname: '',
        category: '',
        country: '',
        desc: '',
        gender: '',
        image: '',
        importer: '',
        price: "",
        salePrice: "",
        quantity: '',
        subname: '',
        thumbnail: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Success:', formData);
        // try {
        //     const res = await addProduct(values)
        //     message.success('Product Added Succesfully 🎉')
        //     router.push('/products')
        // } catch (err) {
        //     console.log(err.response)
        //     message.error(err.response.data.msg)
        // }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

    }


    return (
        <div className="min-h-screen w-full">
            <Head>
                <title>addidas Official Website India</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Navbar />

            <main className="flex flex-col justify-center items-center mt-32">

                <div className='w-10/12'>
                    <h1 className='font-bold text-3xl'>Hello there, mukulrajpoot@gmail.com</h1>
                    <p className='mb-4'>Here is some information about products</p>

                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-xl my-4'>Add Products</h1>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex w-full'>

                                <input type='text' name='name' className="w-full border outline-none mt-4 p-3 px-5 mr-2" placeholder="Enter Product Name..." />

                                <input type='text' name='subname' className="w-full border outline-none mt-4 p-3 px-5 ml-2" placeholder="Enter Product SubName..." />
                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 mr-2'>
                                    <textarea type='text' name='desc' className="w-full border outline-none p-3 px-5 h-28" placeholder="Enter Product Desc..." />
                                </div>

                                <div className='w-1/2 ml-2'>
                                    <select placeholder="Select Category" className='w-full outline-none border p-3'>
                                        <option value="football-boots">Football Shoes</option>
                                        <option value="running-shoes">Running Shoes</option>
                                        <option value="tracksuit">Tracksuit</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="bags">Bags</option>
                                        <option value="accessories">Accessories</option>
                                    </select>

                                    <select placeholder="Select Gender" className='w-full p-3 border mt-4'>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                        <option value="unisex">Unisex</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex w-full mt-4'>

                                <input type='text' className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Country Name..." />

                                <input type='text' className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Importer Name..." />

                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 flex mr-2'>
                                    <input type='number' className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Price..." />
                                    <input type='number' className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Price..." />
                                </div>

                                <div className='w-1/2 ml-2'>
                                    <input type='number' className="w-full border outline-none p-3 px-5" placeholder="Enter Quantity..." />
                                </div>
                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 flex mr-2'>

                                    <input type='text' className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Image Link..." />

                                    <input type='text' className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Thumbnail Link..." />
                                </div>
                                <div className='w-1/2 ml-2'></div>
                            </div>

                            <div className='flex items-center justify-end m-4'>
                                <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 flex items-center uppercase font-bold">Add Product &nbsp; <ArrowRightOutlined /></button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default AddProduct
