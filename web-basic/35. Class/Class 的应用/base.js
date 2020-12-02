// 默认参数
const DEFAULTS = {
    // 初始索引
    initialIndex: 0,
    // 切换时是否有动画
    animation: true,
    // 切换速度，单位 ms
    speed: 300
};
// base
const ELEMENT_NODE = 1;
const SLIDER_ANIMATION_CLASSNAME = 'slider-animation';

class BaseSlider {
    constructor(el, options) {
        console.log(options)
        if (el.nodeType !== ELEMENT_NODE)
            throw new Error('实例化的时候，请传入 DOM 元素！');

        // 实际参数
        this.options = {
            ...DEFAULTS,
            ...options
        };

        const slider = el;
        const sliderContent = slider.querySelector('.slider-content');
        const sliderItems = sliderContent.querySelectorAll('.slider-item');

        // 添加到 this 上，为了在方法中使用
        this.slider = slider;
        this.sliderContent = sliderContent;
        this.sliderItems = sliderItems;

        this.minIndex = 0;
        this.maxIndex = sliderItems.length - 1;
        this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

        // 每个 slider-item 的宽度（每次移动的距离）
        this.itemWidth = sliderItems[0].offsetWidth;

        this.init();
    }

    // 获取修正后的索引值
    // 随心所欲，不逾矩
    getCorrectedIndex(index) {
        if (index < this.minIndex) return this.maxIndex;
        if (index > this.maxIndex) return this.minIndex;
        return index;
    }

    // 初始化
    init() {
        // 为每个 slider-item 设置宽度
        this.setItemsWidth();

        // 为 slider-content 设置宽度
        this.setContentWidth();

        // 切换到初始索引 initialIndex
        this.move(this.getDistance());

        // 开启动画
        if (this.options.animation) {
            this.openAnimation();
        }
    }

    // 为每个 slider-item 设置宽度
    setItemsWidth() {
        for (const item of this.sliderItems) {
            item.style.width = `${this.itemWidth}px`;
        }
    }

    // 为 slider-content 设置宽度
    setContentWidth() {
        this.sliderContent.style.width = `${
      this.itemWidth * this.sliderItems.length
    }px`;
    }

    // 不带动画的移动
    move(distance) {
        this.sliderContent.style.transform = `translate3d(${distance}px, 0px, 0px)`;
    }

    // 带动画的移动
    moveWithAnimation(distance) {
        this.setAnimationSpeed(this.options.speed);
        this.move(distance);
    }

    // 设置切换动画速度
    setAnimationSpeed(speed) {
        this.sliderContent.style.transitionDuration = `${speed}ms`;
    }

    // 获取要移动的距离
    getDistance(index = this.currIndex) {
        return -this.itemWidth * index;
    }

    // 开启动画
    openAnimation() {
        this.sliderContent.classList.add(SLIDER_ANIMATION_CLASSNAME);
    }

    // 关闭动画
    closeAnimation() {
        this.setAnimationSpeed(0);
    }

    // 切换到 index 索引对应的幻灯片
    to(index) {
        index = this.getCorrectedIndex(index);
        if (this.currIndex === index) return;

        this.currIndex = index;
        const distance = this.getDistance();

        if (this.options.animation) {
            return this.moveWithAnimation(distance);
        } else {
            return this.move(distance);
        }
    }

    // 切换上一张
    prev() {
        this.to(this.currIndex - 1);
    }

    // 切换下一张
    next() {
        this.to(this.currIndex + 1);
    }

    // 获取当前索引
    getCurrIndex() {
        return this.currIndex;
    }
}