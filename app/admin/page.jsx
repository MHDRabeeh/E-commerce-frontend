"use client"
import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react'
import { fetchProduct } from '../store/featuers/productSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
export default function Dashboard() {

  const dispatch = useDispatch()
  const { error, products, loading } = useSelector((state) => (state.products))


  console.log(error, products, loading, "this is from here");




  // const productList 
  // const products = useSelector((state) => (state.products))
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])



  const columns = [
    { field: "name", headerName: "Name", width: 180, sortable: true },
    { field: "description", headerName: "Description", width: 250 },
    { field: "price", headerName: "Price", width: 100, sortable: true },
    {
      field: "variantColors",
      headerName: "Colors",
      width: 150,
      valueGetter: (params) => {
        console.log(params?.row?.variants, "colors");
        return params?.row?.variants?.map((v) => v.color).join(", ");
      }
    },
    {
      field: "variantStock",
      headerName: "Stock",
      width: 120,
      valueGetter: (params) => {
        console.log(params, "this is from variant stock");

      }

    },
    {
      field: "variantImages",
      headerName: "Images",
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1, margin: 1 }}>
          {params?.row?.variants?.map((v) => (
            <img
              key={v._id}
              src={v.image}
              alt={v.color}
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
          ))}
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            size="small"
            // onClick={() => handleEdit(params.row._id)}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
          // onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  const rows = products
  return (
    <div className='w-full p-2'>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>

  )
}
