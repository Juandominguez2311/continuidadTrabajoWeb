import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroBannerType = {
  margin?: string;
  padding?: string;
  textOverImg?: boolean;
  urlImage: string;
  imgClass?: string;
  title?: string;
  titleColor?: string;
  titleClass?: string;
  description?: ReactElement;
  descriptionColor?: string;
  descriptionClass?: string;
  buttonText?: string;
  buttonBg?: string;
  buttonClass?: string;
  buttonContainerClass?: string;
  buttonHoverBg?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  /**
   * Text positioning to display, e.g., center, left, or right of the image.
   * Used both if the text is over the image or beside the image.
   */
  positionText?: string;
  /**
   * Text alignment.
   */
  alignText?: string;
  /**
   * Property only when text is displayed over the banner.
   * Displays the text at the top/bottom of the image.
   * If you want to display the text in the center, this prop should not be passed.
   */
  showTextAtTop?: boolean;
  linkTarget?: string;
  widthClass?: string;
  isIcon?: boolean;
  showFilter?: boolean;
  customElement?: ReactElement;
  subTitle?: string;
  subTitleColor?: string;
  subTitleClass?: string;
};

const HeroBanner: React.FC<HeroBannerType> = ({
  textOverImg,
  margin = '',
  padding = '',
  urlImage,
  imgClass,
  title = '',
  description,
  titleColor = 'black',
  titleClass = 'text-4xl md:text-6xl',
  descriptionColor = 'black',
  descriptionClass = 'text-sm sm:text-md md:text-xl',
  buttonText,
  buttonBg,
  buttonLink,
  buttonHoverBg,
  buttonTextColor,
  buttonClass,
  buttonContainerClass,
  alignText,
  linkTarget = '_self',
  widthClass = '',
  isIcon,
  showFilter = false,
  customElement = false,
  subTitle,
  subTitleColor = 'gray',
  subTitleClass = 'text-lg sm:text-xl md:text-2xl',
}) => {
  const showTextNextImg = () => {
    return (
      <div className="container mx-auto flex flex-col">
        <div className={`flex flex-col justify-center px-4 md:px-8 text-${alignText}`}>
          <h1
            className={`text-${titleColor} ${titleClass} font-bold z-10`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div className={`text-${descriptionColor} ${descriptionClass}`}>{description}</div>
          <div className={`items-${alignText} ${buttonContainerClass}`}>
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                target={linkTarget}
                className={`${buttonBg} ${buttonClass} hover:${buttonHoverBg} w-2/6 justify-center ${buttonTextColor} font-bold py-2 px-4 rounded`}
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
        <div className="w-1/2">
          {urlImage && (
            <Image
              src={urlImage}
              alt="Hero Banner Image"
              width={200}
              height={200}
              sizes="100vw"
              className={`w-full ${imgClass}`}
              loading="lazy"
              blurDataURL={urlImage}
              placeholder="blur"
            />
          )}
        </div>
      </div>
    );
  };
  const showTextOverImg = () => {
    return (
      <div className={`${widthClass} ${margin} ${padding} justify-center relative md:py-0 z-0`}>
        {!customElement && (
          <Link href={buttonLink || '#'} target={buttonLink ? linkTarget : '_self'}>
            <div className="absolute w-full top-1/2 -translate-y-1/2 z-10">
              <div className="max-w-screen-xl mx-auto">
                <h1
                  className={`text-${titleColor} ${titleClass} font-bold`}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
                {subTitle && (
                  <h2
                    className={`text-${subTitleColor} ${subTitleClass} mt-2`}
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                  />
                )}
                <div className={`text-${descriptionColor} ${descriptionClass}`}>{description}</div>
                {isIcon && (
                  <div className="flex justify-center mb-[80px] md:mb-0">
                    <img
                      src="/assets/icons/arrow-bottom.svg"
                      alt="Arrow"
                      className="w-6 h-6 ml-2"
                    />
                  </div>
                )}
                {buttonText && buttonLink && (
                  <a
                    href={buttonLink}
                    target={linkTarget}
                    className={`${buttonBg} ${buttonClass} hover:${buttonHoverBg} w-2/6 justify-center ${buttonTextColor} font-bold py-2 px-4 rounded`}
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </Link>
        )}
        {customElement && <div className="absolute w-full h-full z-10">{customElement}</div>}
        {urlImage && (
          <Image
            width={1200}
            height={600}
            className={`w-full ${imgClass}`}
            loading="lazy"
            blurDataURL={urlImage}
            placeholder="blur"
            src={urlImage}
            alt={'Hero Banner Image'}
          />
        )}
        {showFilter && <div className="absolute inset-0 bg-regalDarkBlue opacity-60"></div>}
      </div>
    );
  };

  return (
    <div className={`${margin} ${padding}`}>
      {!textOverImg && showTextNextImg()}
      {textOverImg && showTextOverImg()}
    </div>
  );
};

export default HeroBanner;
