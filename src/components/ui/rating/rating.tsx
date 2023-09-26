import { memo, useState } from 'react'

import { clsx } from 'clsx'

import s from './rating.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

type RatingProps = {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
  totalStars?: number
}

export const Rating = memo((props: RatingProps) => {
  const { className, size = 16, selectedStars = 0, onSelect, totalStars = 5 } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={className}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1

        return (
          <Icon
            className={clsx(s.starIcon, currentStarsCount >= starNumber ? s.hovered : s.normal, {
              [s.selected]: isSelected,
            })}
            name={'star'}
            key={starNumber}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
          />
        )
      })}
    </div>
  )
})
