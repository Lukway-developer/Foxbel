/* eslint-disable react/jsx-indent */
const Logo = ({ className, theme }) => {
  return (
    <picture>
      {
      // Selection between normal or white logo
      theme === 'normal'
        ? <>
            <source media='(min-width: 1024px)' srcSet='./images/foxbel-music.png' />
            <source media='(max-width: 768px)' srcSet='./images/foxbel-music@2x.png' />
            <source media='(max-width: 425px)' srcSet='./images/foxbel-music@3.png' />
            <img
              className={className}
              src='./images/foxbel-music.png'
              alt='Foxbel Logo'
            />
          </>
        : <>
            <source media='(min-width: 1024px)' srcSet='./images/foxbel-music-white.png' />
            <source media='(max-width: 768px)' srcSet='./images/foxbel-music-white@2x.png' />
            <source media='(max-width: 425px)' srcSet='./images/foxbel-music-white@3.png' />
            <img
              className={className}
              src='./images/foxbel-music-white.png'
              alt='Foxbel Logo'
            />
          </>
      }
    </picture>
  )
}

export default Logo
