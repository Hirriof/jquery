import Script from 'next/script'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
        {/*<!-- jQuery -->*/}
        <Script src="vendor/jquery/jquery.min.js"></Script>

        {/*<!-- Bootstrap Core JavaScript -->*/}
        <Script src="vendor/bootstrap/js/bootstrap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></Script>

        {/*<!-- Wow Animations -->*/}
        <Script src="vendor/wow.min.js"></Script>

        {/*<!-- Plugin JavaScript -->*/}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></Script>

        {/*<!-- Theme JavaScript -->*/}
        <Script src="js/main.js"></Script>
        <Script src="js/jquery.isotope.js"></Script>


      </div>
    </main>







  )
}
