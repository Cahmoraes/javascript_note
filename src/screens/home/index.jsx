import presentationImage from '../../assets/images/presentation.png'
import Header from '../../components/header'
import { Column, Section, Title, Container } from 'rbx'
import { Link } from 'react-router-dom'

import '../../styles/home.scss'

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Section size="medium" className="home">
        <Container>
          <Column.Group>
            <Column size={5}>
              <Title size={2} spaced className="has-text-white">
                Create notes easily and access when you wants on the cloud
              </Title>
              <Title size={5} spaced className="has-text-light" subtitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi sequi id numquam iste sit placeat vero consectetur aut odit atque, fugit optio! Sequi mollitia ullam molestias voluptas veritatis accusamus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi sequi id numquam iste sit placeat vero consectetur aut odit atque, fugit optio! Sequi mollitia ullam molestias voluptas veritatis accusamus.
              </Title>
              <Link to="/register" className="button is-outlined is-white is-large">
                <strong>Register for free Now</strong>
              </Link>
            </Column>
            <Column size={6} offset={1}>
              <img src={presentationImage} alt="Apresentação" />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  )
}