import React from 'react';
import styles from './BusinessCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComputer, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faPython, faJsSquare, faCss3Alt, faHtml5, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const BusinessCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <div className="flex-shrink-0 w-1/2 flex justify-center items-center">
              <img src="/path/to/your/photo.jpg" alt="Juan Jose Gomez Sanchez" className={styles.profileImage} />
            </div>
            <div className="flex flex-col justify-start items-start w-1/2 p-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-roboto-slab">Juan Jose Gomez Sanchez</h2>
              <div className="flex items-center text-white mt-2">
                <FontAwesomeIcon icon={faComputer} className="mr-2" />
                <p className="text-white text-sm sm:text-base font-roboto-slab">Ingeniero de Sistemas</p>
              </div>
              <div className="flex items-center text-white mt-2">
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                <p className="text-white text-sm sm:text-base font-roboto-slab">Desarrollador Frontend Flutter y Next js</p>
              </div>
              <div className="flex items-center text-white mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <p className="text-white text-sm sm:text-base font-roboto-slab">ju4ng0mezs@gmail.com</p>
              </div>
              <div className={styles.aboutMe}>
                <h3 className="text-lg sm:text-xl font-bold">Acerca de mi</h3>
                <p className="text-sm sm:text-base mt-2">
                  Ingeniero de sistemas colombiano con fuerte formación en diversas tecnologías y herramientas. Hábil en Python, Django, análisis de datos, Power BI, SQL y administración de bases de datos. Experiencia en desarrollo móvil usando Flutter, tecnologías web como Javascript, Next.js y Tailwind.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-roboto-slab mb-2 text-center">Experiencia</h2>
            <div className={styles.experienceItem}>
              <p className={styles.experienceTitle}>Desarrollador Frontend Flutter</p>
              <span className={styles.experienceDate}>Junio-Actualidad</span>
              <p className="text-white text-sm sm:text-base mt-2">• Experiencia construyendo aplicaciones móviles nativas multiplataforma usando Flutter.</p>
              <p className="text-white  text-sm sm:text-base mt-2">• Habilidad en el uso de widgets personalizados para construir interfaces de usuario intuitivas y atractivas. Implementación de navegación eficiente y gestión de estados con Flutter.</p>
            </div>
            <div className={styles.experienceItem}>
              <p className={styles.experienceTitle}>Desarrollador Frontend Next.js</p>
              <span className={styles.experienceDate}>Junio-Actualidad</span>
              <p className="text-white  text-sm sm:text-base mt-2">• Experiencia en desarrollo de aplicaciones web utilizando Next.js.</p>
              <p className="text-white  text-sm sm:text-base mt-2">• Habilidad en la creación de interfaces de usuario con React y Tailwind CSS.</p>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-roboto-slab mb-2 text-center">Tecnologías</h2>
            <div className={styles.technologies}>
              <FontAwesomeIcon icon={faReact} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
              <FontAwesomeIcon icon={faNodeJs} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
              <FontAwesomeIcon icon={faPython} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
              <FontAwesomeIcon icon={faJsSquare} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
              <FontAwesomeIcon icon={faCss3Alt} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
              <FontAwesomeIcon icon={faHtml5} className={`text-white text-2xl sm:text-3xl ${styles['tech-icon']}`} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-roboto-slab mb-2 text-center">Redes Sociales</h2>
            <div className={styles.social}>
              <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={`text-white text-2xl sm:text-3xl ${styles['social-icon']}`} />
              </a>
              <a href="https://www.linkedin.com/in/juan-jose-gomez-962418249/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={`text-white text-2xl sm:text-3xl ${styles['social-icon']}`} />
              </a>
              <a href="https://github.com/xoan04" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={`text-white text-2xl sm:text-3xl ${styles['social-icon']}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
