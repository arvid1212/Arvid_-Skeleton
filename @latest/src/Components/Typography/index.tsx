import { ReactNode, CSSProperties} from 'react'

import * as S from "../Typography/Typo.css"

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5 ' | 'h6' | 'p' | 'span'

type TypographyProps = {
    
    tag? : TagVariants
    children: ReactNode

}

const Typography = ({tag = 'p'}: TypographyProps) => ( <S.DynamicTypography tag={tag}>
    {children}


</S.DynamicTypography>

)
export default Typography