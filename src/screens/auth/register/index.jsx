import { Container, Column, Section, Title, Card } from 'rbx'
import Header from '../../../components/header'

import '../../../styles/auth.scss'
import logoImage from '../../../assets/images/logo.png'

const Register = () => (
  <>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={logoImage} alt="logo" />
                    </Column>
                  </Column.Group>
                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} className="has-text-grey has-text-centered">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default Register