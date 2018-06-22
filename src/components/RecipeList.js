import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const RecipeList = () => {
  return (
    <Paper>
      <Typography variant='headline'>Recipes</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Prep time</TableCell>
            <TableCell>Source</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Some Title</TableCell>
            <TableCell>Entree</TableCell>
            <TableCell>Under 30 min</TableCell>
            <TableCell>Epicurious</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
};

export default RecipeList;