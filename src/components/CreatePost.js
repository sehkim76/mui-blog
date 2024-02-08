import { Edit } from '@mui/icons-material'
import { Fab, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <Tooltip title="글올리기"
            sx={{ position: "fixed", bottom: 20, right: 30}}
        >
            <IconButton>
                <Fab>
                    <Edit onClick={()=>{

                    }}/>
                </Fab>
            </IconButton>
        </Tooltip>

    </div>
  )
}

export default CreatePost