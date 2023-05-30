import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function PilihKota() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Pilih Kota">
      <Dropdown.Item href="#/action-1">Padang</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Medan</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Pontianak</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Samarinda</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Makassar</Dropdown.Item>
      <Dropdown.Item href="#/action-6">Manado</Dropdown.Item>
      <Dropdown.Item href="#/action-7">Semarang</Dropdown.Item>
      <Dropdown.Item href="#/action-8">Denpasar</Dropdown.Item>
      <Dropdown.Item href="#/action-9">Jayapura</Dropdown.Item>
      <Dropdown.Item href="#/action-10">Sorong</Dropdown.Item>
    </DropdownButton>
  );
}

export default PilihKota;
