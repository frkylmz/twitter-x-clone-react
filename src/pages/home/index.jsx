import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Home">
          <Tab.Items>
            <Tab.Item id="for-you">For You</Tab.Item>
            <Tab.Item id="followings">Following</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">1.content</Tab.Content>
        <Tab.Content id="followings">2.content</Tab.Content>
      </Tab>
      home component!
    </>
  );
}
