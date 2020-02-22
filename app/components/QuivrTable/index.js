/**
 *
 * QuivrTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { needles } from './utils';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function QuivrTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Needle </TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Length</TableCell>
            <TableCell align="right">Material</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {needles.map(needle => (
            <TableRow key={needle.type}>
              <TableCell component="th" scope="needle">
                {needle.type}
              </TableCell>
              <TableCell align="right">{needle.size}</TableCell>
              <TableCell align="right">{needle.length}</TableCell>
              <TableCell align="right">{needle.material}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

QuivrTable.propTypes = {};

export default QuivrTable;
