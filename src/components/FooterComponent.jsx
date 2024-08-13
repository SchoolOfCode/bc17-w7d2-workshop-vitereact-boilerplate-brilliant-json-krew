import React from 'react'

export default function FooterComponent() {
  return (
    <div>
      <footer>
              <section className ="footer-container">
                <article>
                  <ul>
                    <li>Find us on:</li>
                    <li><a href="https://www.facebook.com" class="social-link">Facebook</a></li>
                    <li><a href="https://www.instagram.com" class="social-link">Instagram</a></li>
                    <li><a href="https://www.tiktok.com" class="social-link">TikTok</a></li> 
                  </ul>           
                </article>
                  
                <article>  
                <p>Contact us:</p>
                <address><a href="mailto:info@firepalace.co.uk" class="email-link"
                >info@firepalace.co.uk</a></address>
                </article>
              </section>
      </footer>
    </div>
  )
}
