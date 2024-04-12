import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { Catalog } from "../../Components/Catalog/Catalog";
import { ShowProduct } from '../../Components/ShowProduct/ShowProduct';
import { Section1 } from '../../Components/Section1/Section1';
import { Category } from '../../Components/Category/Category';
import { Section2 } from '../../Components/Section2/Section2';

export function Home() {
  return (
    <>
    <Banner/>
    <Catalog/>
    <ShowProduct/>
    <Section1/>
    <Category/>
    <Section2/>
    </>
  )
}
