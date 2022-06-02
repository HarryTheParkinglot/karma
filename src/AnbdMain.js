import {
  View,
  ViewBox,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";

// From https://simpleicons.org/?q=expo
import BellIcon from "../assets/bell.svg";
import WriteIcon from "../assets/write.svg";
import SettingIcon from "../assets/setting.svg";
import Tag1Icon from "../assets/tag1.svg";
import Tag2Icon from "../assets/tag2.svg";
import Tag3Icon from "../assets/tag3.svg";
import Tag4Icon from "../assets/tag4.svg";
import Tag5Icon from "../assets/tag5.svg";
import Tag6Icon from "../assets/tag6.svg";
import SearchIcon from "../assets/search.svg";
import HeartIcon from "../assets/heart.svg";
import CommentIcon from "../assets/comment.svg";

export default function AnbdMain() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>아나바다</Text>
        <WriteIcon width={19.7} height={20} style={{ marginRight: 10 }} />
        <BellIcon width={18} height={21} fill="white" />
      </View>

      <ScrollView>
        <View style={styles.tagGroup}>
          <View style={styles.tagSpacer}>
            <SettingIcon width={22} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag1Icon width={46} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag2Icon width={46} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag3Icon width={56} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag4Icon width={46} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag5Icon width={46} height={22} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag6Icon width={56} height={22} />
          </View>
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchText}
            editable={false}
            placeholder="나에게 필요한 것을 검색해보세요"
          />
          <View style={styles.searchIconBox}>
            <SearchIcon width={20} height={20} fill="#4a4a4a" />
          </View>
        </View>

        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // zIndex: 10,
    width: "100vw",
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 700,
    marginRight: "auto",
  },
  tagGroup: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
  },
  tagSpacer: {
    marginRight: 6,
  },

  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    margin: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    marginTop: 0,
  },
  searchText: {
    flex: 1,
    height: 38,
    paddingLeft: 12,
    borderColor: "#000",
  },
  searchIconBox: {
    position: "relative",
    marginRight: 12,
  },
  searchIcon: {
    width: "100vw",
    alignItems: "center",
    flexDirection: "row-reverse",
    right: 23,
  },
  postBox: {
    borderTopWidth: 0.7,
    borderColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  postBottomGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  postBottomText: {
    color: "#ACACAC",
    fontSize: 12,
  },
  postBottomIconGroup: {
    flexDirection: "row",
  },
  postBottomItemGroupText: {
    fontSize: 14,
    color: "#ACACAC",
    textAlign: "center",
    paddingLeft: 3,
    paddingBottom: 4,
  },
  postBottomIconGroupSmall: {
    flexDirection: "row",
    paddingLeft: 12,
    alignItems: "center",
  },
  postBottomTextGroup: {
    justifyContent: "center",
  },
  footer: {},
});
