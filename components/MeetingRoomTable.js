import useSWR from 'swr';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const fetcher = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}


const MeetingRoomTable = () => {
  const { data, error } = useSWR('/api/sensor', fetcher, { refreshInterval: 10000 })

  return (
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Room Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>空室状況</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              会議室A
            </TableCell>
            {error?
              <TableCell>-</TableCell>:
              <TableCell>{data && data.isLight ? "満室" : "空室"}</TableCell>
            }
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MeetingRoomTable;