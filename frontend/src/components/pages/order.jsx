import axios from "axios"
import { useForm } from "react-hook-form"
import { useAuth } from "../provider/authprovider"
import { Header } from "../partials/header"
import { Orderstyle } from "../style/order.style"
import { Footer } from "../partials/footer"

/**
 * Post Component
 * Formular til at poste data til API
 */
export const Order = () => {
  const { loginData } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const formSubmit = async formObject => {
    const api_endpoint = 'http://localhost:4000/orders'

    const formData = new URLSearchParams()
    formData.append('fullname', formObject.fullname)
    formData.append('address', formObject.address)
    formData.append('zipcode', formObject.zipcode)
    formData.append('city', formObject.city)
    formData.append('email', formObject.email)
    formData.append('phone', formObject.phone)
    formData.append('container_id', formObject.container_id)


    console.log(...formData);

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    }

    try {
      const result = await axios.post(api_endpoint, formData, options)
      if (result.data) {
        console.log(result.data);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Orderstyle>
        <section>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div>
              <h1>Hvor skal den leveres?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi minima autem totam recusandae exercitationem culpa est quam beatae sunt. Saepe, perferendis.</p>
            </div>

            <div>
              <label htmlFor="fullname"></label>
              <input placeholder="Navn" {...register('fullname',
                {
                  required: 'Du skal indtaste dit fornavn',
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: 'Du skal indtaste et gyldigt navn'
                  }
                })} /> <br />
              {errors.fullname && <span>{errors.fullname.message}</span>}
            </div>

            <div>
              <label htmlFor="email"></label>
              <input placeholder="Email" {...register('email',
                {
                  required: 'Du skal indtaste din email',
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: 'Du skal indtaste en gyldig mailadresse'
                  },
                })} /> <br />
              {errors.email && <span>{errors.email.message}</span>}
            </div>


            <div>
              <label htmlFor="phone"></label>
              <input placeholder="Telefon" {...register('phone',
                {
                  required: 'Du skal indtaste dit telefonnummer',
                  pattern: {
                    value: /^\d{8,8}$/,
                    message: 'Du skal indtaste et gyldigt telefonnummer'
                  },

                })} /> <br />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>

            <div>
              <label htmlFor="address"></label>
              <input placeholder="Adresse" {...register('address',
                {
                  required: 'Du skal indtaste din adresse'
                })} /> <br />
              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div>
              <label htmlFor="zipcode"></label>
              <input placeholder="Postnummer" {...register('zipcode',
                {
                  required: 'Du skal indtaste dit postnummer',
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: 'Du skal indtaste et gyldigt postnummer'
                  },
                  min: {
                    value: 999,
                    message: 'Postnummer kan ikke være mindre end 1000'
                  },
                  max: {
                    value: 9990,
                    message: 'Postnummer kan ikke være større end 9990'
                  }
                })} /> <br />
              {errors.zipcode && <span>{errors.zipcode.message}</span>}
            </div>

            <div>
              <label htmlFor="city"></label>
              <input placeholder="By" {...register('city',
                {
                  required: 'Du skal indtaste et bynavn'
                })} /> <br />
              {errors.city && <span>{errors.city.message}</span>}
            </div>



            <div>
              <label htmlFor="container_id"></label>
              <select name="" id=""{...register('container_id',
                {
                  required: 'Du skal indtaste vælge en container',
                })}>
                <option hidden>Vælg container</option>
                <option value="1">Pap og papir</option>
                <option value="2">Plast og metal</option>
                <option value="3">Mad og rest</option>
                <option value="4">Farligt</option>
              </select> <br />
              {errors.container_id && <span>{errors.container_id.message}</span>}
            </div>

            <div>
              <button>Send</button>
            </div>
          </form>
        </section>
      </Orderstyle>
      <Footer />
    </>
  )
}

