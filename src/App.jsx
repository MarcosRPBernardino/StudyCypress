import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    cidade: '',
    telefone: '',
    email: '',
    aceitaPolitica: false,
    receberAtualizacoes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setIsSubmitted(true)
  }

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Registration Form</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input
            data-cy="name-input"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Surname:</label>
          <input
            data-cy="surname-input"
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Age:</label>
          <input
            data-cy="age-input"
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            required
            min="0"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City:</label>
          <input
            data-cy="city-input"
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone:</label>
          <input
            data-cy="phone-input"
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            data-cy="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            data-cy="privacy-policy-checkbox"
            type="checkbox"
            name="aceitaPolitica"
            checked={formData.aceitaPolitica}
            onChange={handleChange}
            required
            style={{ width: '18px', height: '18px' }}
          />
          <label style={{ margin: 0 }}>I accept the privacy policy</label>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Would you like to receive email updates?
          </label>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                data-cy="email-updates-radio-sim"
                type="radio"
                name="receberAtualizacoes"
                value="sim"
                checked={formData.receberAtualizacoes === 'sim'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                data-cy="email-updates-radio-nao"
                type="radio"
                name="receberAtualizacoes"
                value="nao"
                checked={formData.receberAtualizacoes === 'nao'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          data-cy="submit-button"
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Submit
        </button>
        {isSubmitted && (
          <p
            data-cy="success-message"
            style={{
              color: 'green',
              fontWeight: 'bold',
              marginTop: '10px',
              textAlign: 'center'
            }}
          >
            Form submitted
          </p>
        )}
      </form>
    </div>
  )
}

export default App
