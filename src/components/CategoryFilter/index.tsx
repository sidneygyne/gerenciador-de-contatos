import React from 'react'
import { categories } from '../../utils/categories'
import { CategoryButton, Container } from './styles'

type Props = {
  selectedCategory: string
  onChangeCategory: (category: string) => void
}

export const CategoryFilter: React.FC<Props> = ({ selectedCategory, onChangeCategory }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCategory(e.target.value)
  }

  return (
    <Container>
      {categories.map((cat) => (
        <CategoryButton
          key={cat.value}
          active={selectedCategory === cat.value}
          onClick={() => onChangeCategory(cat.value)}
        >
          {cat.label}
        </CategoryButton>
      ))}
    </Container>
  )
}
