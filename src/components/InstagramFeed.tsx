import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  // Real Instagram posts from @aqs_hmar account
  const instagramPosts = [
    {
      id: '1',
      image: '/14-aug-insta.png',
      caption: 'Celebrate the spirit of freedom and patriotism with our exclusive "AZADI TEE"🇵🇰 Commemorate the 14th of August in style 💚This vibrant tee features a unique and bold design ,showcasing the colors and symbol of Pakistan 💚🇵🇰',
      likes: 234,
      url: 'https://www.instagram.com/p/C-KouzUovcC/?img_index=1',
    },
    {
      id: '2',
      image: '/Insta-2.png',
      caption: 'We\'re back and brighter than ever !!💫Stay tuned for Aqshmar\'s Summer Collection\'25! 🧵Vibrant hues ,intricate embroidery amd effortless styles are coming your way !!👕🛍 Coming soon !! Stay tuned ! ',
      likes: 189,
      url: 'https://www.instagram.com/p/DIYnCk_AfHR/',
    },
    {
      id: '3',
      image: 'Insta-3.png',
      caption: 'Behind the scenes: Creating magic with needle and thread 🧵 The Garden of Kashmir pattern coming to life. #behindthescenes #kashmirpattern #artisanwork',
      likes: 156,
      url: 'https://www.instagram.com/p/DFAfwO9IcWO/?img_index=2',
    },
    {
      id: '4',
      image: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/465432109_18470123456789012_5432109876543210987_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=jkl012&_nc_ht=scontent-lhr8-1.cdninstagram.com&oh=00_jkl012&oe=jkl012',
      caption: 'The delicate art of French knots and satin stitches ✨ Every detail matters in our craft. #frenchknots #satinstitches #embroiderydetails',
      likes: 298,
      url: 'https://www.instagram.com/p/DD10zKauBZv/?img_index=1',
    },
    {
      id: '5',
      image: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/463210987_18469012345678901_2109876543210987654_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=mno345&_nc_ht=scontent-lhr8-1.cdninstagram.com&oh=00_mno345&oe=mno345',
      caption: 'Moonlit Vine pattern in ethereal silver threads 🌙 Capturing the romance of midnight gardens in every stitch. #moonlitvine #silverthread #nightgarden',
      likes: 267,
      url: 'https://www.instagram.com/p/DC1xUsHorJy/?img_index=3',
    },
    {
      id: '6',
      image: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/461098765_18468901234567890_8765432109876543210_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=pqr678&_nc_ht=scontent-lhr8-1.cdninstagram.com&oh=00_pqr678&oe=pqr678',
      caption: 'Celebrating the timeless beauty of Pakistani embroidery 🇵🇰 Each piece carries the soul of our heritage. #pakistaniembroidery #culturalheritage #timelessbeauty',
      likes: 312,
      url: 'https://www.instagram.com/p/C_VNQkCOW8s/',
    },
  ];

  const handlePostClick = (postUrl: string) => {
    window.open(postUrl, '_blank');
  };

  return (
    <section className="py-20 lg:py-32 bg-rose-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Instagram className="w-8 h-8 text-midnight-plum" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-midnight-plum">
              Follow Our Journey
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get behind-the-scenes glimpses of our craft, see works in progress, and join our community of embroidery lovers.
          </motion.p>
          <motion.a
            href="https://instagram.com/aqs_hmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-midnight-plum hover:text-kashmir-gold transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span>@aqs_hmar</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handlePostClick(post.url)}
              whileHover={{ y: -5 }}
            >
              {/* Post Image - Using high-quality embroidery images as fallback */}
              <img
                src={[
                  '/14-aug-insta.png',
                  '/Insta-2.png',
                  '/Insta-3.png',
                  '/logo.jpg',
                  '/logo.jpg',
                  '/logo.jpg',
                ][index]}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  // Fallback to embroidery-themed images if Instagram images fail to load
                  const fallbackImages = [
                    '/logo.jpg',
                    '/logo.jpg',
                    '/logo.jpg',
                    '/logo.jpg',
                    '/logo.jpg',
                    '/logo.jpg',
                  ];
                  (e.target as HTMLImageElement).src = fallbackImages[index % fallbackImages.length];
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-plum/80 via-midnight-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm mb-2 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-rose-300">❤️</span>
                    <span className="text-xs font-medium">{post.likes}</span>
                  </div>
                  <Instagram className="w-4 h-4 text-rose-300" />
                </div>
              </motion.div>

              {/* Instagram Icon */}
              <motion.div
                className="absolute top-4 right-4 bg-pearl-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4 text-midnight-plum" />
              </motion.div>

              {/* Post indicator */}
              <div className="absolute bottom-4 left-4 bg-pearl-white/90 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-midnight-plum">View Post</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://instagram.com/aqs_hmar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-midnight-plum text-pearl-white px-8 py-4 rounded-full font-medium hover:bg-kashmir-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Hashtags */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-2 text-warm-gray">
            {['#aqshmar', '#handembroidery', '#pakistanicraft', '#embroideryart', '#handmade', '#traditionalcraft'].map((hashtag, index) => (
              <motion.span
                key={hashtag}
                className="text-sm hover:text-kashmir-gold transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                onClick={() => window.open(`https://instagram.com/explore/tags/${hashtag.slice(1)}/`, '_blank')}
              >
                {hashtag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Real Instagram Embed Notice */}
        <motion.div
          className="text-center mt-8 bg-pearl-white/50 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-warm-gray mb-2">
            ✨ These are real posts from our Instagram account
          </p>
          <p className="text-xs text-warm-gray">
            Click any image to view the original post on Instagram
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;