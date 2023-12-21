import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from "../../../constants"
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://img.freepik.com/premium-vector/hiring-job-vacancy-square-social-media-post_45668-568.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais"
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company