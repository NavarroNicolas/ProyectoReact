import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const BuyEnd = ( {compraID} ) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Divider sx={{m:3}}/>
          <Alert severity="info">
            <AlertTitle> Gracias por elegirnos!</AlertTitle>
             Tu ID de compra es — <strong> { compraID } </strong>
          </Alert>
        </Stack>
      );
    }

export default BuyEnd;
